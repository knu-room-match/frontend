admin -> backend -> client (문항 커스텀으로 만들때)

```ts
export const QuestionTypes = {
    checkbox: "checkbox",
    selector: "selector",
    slider: "slider",
    doubleSlider: "doubleSlider",
} as const;

interface FormProps {
    title: string;
    description: string;
    questions: {
        questionText: string;
        questionType: keyof typeof QuestionTypes;
        dataType: string;
        options: { label?: string; value: any }[];
    }[];
}
```

```js
const formProps: FormProps = {
    title: "test",
    description: "test",
    questions: [
        {
            questionId
            questionText: "test-question-slider",
            questionType: "slider",
            dataType: "number",
            options: [
                { label: "label1", value: 1 },
                { label: "label2", value: 2 },
                { label: "label3", value: 3 },
            ],
        },
        {
            questionText: "test-question-checkbox",
            questionType: "checkbox",
            dataType: "number",
            options: [
                { label: "label1", value: "value1" },
                { label: "label2", value: "value2" },
                { label: "label3", value: "value3" },
            ],
        },
        {
            questionText: "test-question-selector",
            questionType: "selector",
            dataType: "number",
            options: [
                { label: "label1", value: "value1" },
                { label: "label2", value: "value2" },
                { label: "label3", value: "value3" },
            ],
        },
        {
            questionText: "test-question-doubleSlider",
            questionType: "doubleSlider",
            dataType: "number",
            options: [
                { label: "label1", value: 1 },
                { label: "label2", value: 2 },
                { label: "label3", value: 3 },
                { label: "label4", value: 4 },
                { label: "label5", value: 5 },
            ],
        },
    ],
};
```

client (문항 응답자가 응답완료해서 백엔드로 보낼때) -> backend

```ts
interface ResponseSchema {
    sruveyId:
}

```
