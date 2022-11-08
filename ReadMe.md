# tiny-modal-testy

A modal component for Reactjs application.

## Installation

```bash
npm i tiny-modal-testy
```

## Usage

The modal component is simple :

-   Displays an array of messages
-   Can be closed with a click on a top-right cross or outside.
-   Can be customed with some css properties

Here is an usage example :

```typescript
import { Modal } from "tiny-modal-testy";
import { useState } from "react";


interface formModalInfos {
    isSuccess: boolean;
    isOpen: boolean;
}

export const MyComponent = () => {
    // A modal opening state
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // You have to add an handler for the modal opening
    const handleModalOpening = () => {
        setIsOpen(!isOpen);
    };

    const getMessages = (): string[] => {
        return ["Employee successfully created !"];
    };

    // All of these are optional
    const modalCSSProperties = {
        zIndex: 1000,
        backgroundColor: "#eff9bd",
        color: "black",
        fontWeight: 400,
    };
    // All of these are optional
    const closeModalCSSProperties = {
        backgroundColor: "transparent",
        color: "#6c850f",
    };
    // If true, the background around the modal is darker
    const backgroundShadow: boolean = true;

    return (
        <main>
            <Modal
                isOpen={isOpen}
                modalMessages={getMessages()}
                closeModal={closeModal}
                modalCSSProperties={modalCSSProperties}
                closeModalCSSProperties={closeModalCSSProperties}
                backGroundShadow={backgroundShadow}
            />
        </main>
    );
};
```

## Props details

| Prop                    | Type                                                                                                                         |                                                                                                   Description |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------: |
| isOpen                  | boolean                                                                                                                      |                                                                               If true, the modal is displayed |
| modalMessages           | string []                                                                                                                    |                                                                  The array of messages displayed in the modal |
| closeModal              | ()=>{void}                                                                                                                   | The function that closes the modal. You can add any other action you want to trigger when the modal is closed |
| modalCSSProperties      | modalCSSProperties : { zIndex?: number; backgroundColor?: string; color?: string; boxShadow? : string; fontWeight? : number} |                                                                                        Custom the modal style |
| closeModalCSSProperties | closeModalCSSProperties : { backgroundColor?: string; color?: string }                                                       |                                                                           custom the cross to close the modal |
| backGroundShadow        | boolean                                                                                                                      |                                                   If the background around the modal is darker or transparent |

## License

[MIT](https://choosealicense.com/licenses/mit/)
