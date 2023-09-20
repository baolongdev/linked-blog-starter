import { CanvasData, CanvasNodeData, CanvasFileData, CanvasTextData, CanvasLinkData, CanvasGroupData } from "../interfaces/canvas";

export function canvasToHtml(canvasData: CanvasData) {
    // Create a canvas element in the HTML with the desired size
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    canvas.style.border = "1px solid black";
    canvas.style.borderRadius = "8px"
    handleCanvasDrag(canvas, canvasData);
    drawCanvas(canvas, canvasData);
}

function drawCanvas(canvas: HTMLCanvasElement, canvasData: CanvasData) {
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Iterate through the nodes and draw them
    canvasData.nodes.forEach(node => {
        ctx.fillStyle = node.color || '#000'; // Set node color or default to black
        ctx.fillRect(node.x, node.y, node.width, node.height);

        // Add node text
        ctx.fillStyle = '#fff'; // Text color
        ctx.fillText(node.text, node.x + 10, node.y + 20); // Adjust text position
    });

    // Iterate through the edges and draw them
    canvasData.edges.forEach(edge => {
        const fromNode = canvasData.nodes.find(node => node.id === edge.fromNode);
        const toNode = canvasData.nodes.find(node => node.id === edge.toNode);
        
        // Draw an edge line
        ctx.strokeStyle = edge.color || '#333'; // Edge color or default to gray
        ctx.beginPath();
        ctx.moveTo(fromNode.x + fromNode.width, fromNode.y + fromNode.height / 2);
        ctx.lineTo(toNode.x, toNode.y + toNode.height / 2);
        ctx.stroke();
        
        // Add edge label if available
        if (edge.label) {
            ctx.fillStyle = '#000'; // Label text color
            const labelX = (fromNode.x + toNode.x) / 2;
            const labelY = (fromNode.y + toNode.y) / 2;
            ctx.fillText(edge.label, labelX, labelY);
        }
    });
}

function handleCanvasDrag(canvas: HTMLCanvasElement, canvasData: CanvasData) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    // Keep track of the initial positions of all nodes
    const initialNodePositions = new Map<string, { x: number; y: number }>();

    canvasData.nodes.forEach(node => {
        initialNodePositions.set(node.id, { x: node.x, y: node.y });
    });

    canvas.addEventListener("mousedown", (e) => {
        if (e.button === 0) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
        }
    });

    canvas.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            // Translate the positions of all nodes
            canvasData.nodes.forEach(node => {
                const initialPosition = initialNodePositions.get(node.id);
                if (initialPosition) {
                    node.x = initialPosition.x + deltaX;
                    node.y = initialPosition.y + deltaY;
                }
            });

            // Redraw the canvas with updated node positions
            drawCanvas(canvas, canvasData);
        }
    });

    canvas.addEventListener("mouseup", () => {
        isDragging = false;

        // Save the final positions of nodes
        canvasData.nodes.forEach(node => {
            initialNodePositions.set(node.id, { x: node.x, y: node.y });
        });
    });

    canvas.addEventListener("mouseleave", () => {
        isDragging = false;
    });
}