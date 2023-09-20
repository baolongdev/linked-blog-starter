import { canvasToHtml } from "../../lib/canvasToHtml";
import { useState, useEffect } from "react";
import DOMPurify from 'dompurify';

const View = () => {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/canvas');
            if (response.ok) {
                const data = await response.json();
                if (typeof data === 'string') {
                  // If data is a string, it needs to be parsed into an object
                  const canvasData = JSON.parse(data);
                  await canvasToHtml(canvasData);
                } else {
                  // If data is already an object, you can proceed
                  await canvasToHtml(data);
                }
            } else {
              console.error('Failed to fetch canvas data');
            }
          } catch (error) {
            console.error('Error fetching canvas data:', error);
          }
        };
    
        fetchData();        
      }, []);


    return (
        <section className="h-[600px] mt-20 flex items-center flex-col p-8">
            <canvas id="canvas" className="w-full h-full"/>
        </section>
    );
}

export default View;
