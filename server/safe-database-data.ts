
export const SAFE_LESSONS = {

    1: {
        id: 1,
        "description": "Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step",
        "longDescription": [
            {
                seqNo: 1,
                text: `This is step by step guide to create your 
    
    <script>alert("XSS")</script>
    


    <a href="javascript:alert('XSS')">Click Me</a>                 
                 
                 
                 `
            },
            {
                seqNo: 2,
                text: "first  application.",
                type: "BOLD"
            },
            {
                seqNo: 3,
                text: "Its aimed at beginners",
                type: "BOLD"
            },
            {
                seqNo: 4,
                text: "just starting out with the framework.This lesson will show how to create a component, and how to link the component to a"
            },
            {
                seqNo: 5,
                text: "given custom HTML tag",
                type: "ITALIC"
            },
            {
                seqNo: 6,
                text: "It will show how to give the component a given template."
            }
        ],
        "tags": "BEGINNER",
        "duration": "4:17",
        "url": "https://www.youtube.com/watch?v=LVrF-aQ6NxQ",
        "videoUrl": "https://www.youtube.com/embed/du6sKwEFrhQ"
    },
    2: {
        id: 2,
        "description": "Building Your First  Component - Component Composition",
        "duration": "2:07",
        "longDescription": ["In this lesson we are going to see how to include a component inside another component. We are going to create a simple search box component and include it in our main application."],
        "tags": "BEGINNER",
        "url": "angular2-build-your-first-component",
        "videoUrl": "https://www.youtube.com/embed/VES1eTNxi1s"
    },
    3: {
        id: 3,
        "description": "Component @Input - How To Pass Input Data To an  Component",
        "duration": "2:33",
        "longDescription": ["In this lesson we are going to learn how to use the  template syntax for properties, and learn how we can use it to pass input data to a component. We are going to see also a simplified input syntax for passing constant strings as component inputs."],
        "tags": "BEGINNER",
        "url": "angular2-passing-data-to-component-using-input",
        "videoUrl": "https://www.youtube.com/embed/Yfebo2mFrTU"
    }
};