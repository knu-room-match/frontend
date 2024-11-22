import { SetStateAction } from "react";

import { FormProps, FormState, Option } from "../FormRenderer";
import { SliderWithLabelForm } from "../SliderWithLabelForm";
import { render, screen } from "@testing-library/react";

describe("<SliderWithLabelForm/>", () => {
    const formState = {
        "test-question-slider": [{ value: 2 }],
    };
    const setFormState = jest.fn();

    const options = [
        { label: "label1", value: 1 },
        { label: "label2", value: 2 },
        { label: "label3", value: 3 },
    ];

    beforeAll(() => {
        global.ResizeObserver = class ResizeObserver {
            observe() {}
            unobserve() {}
            disconnect() {}
        };
    });

    beforeEach(() => {
        render(
            <SliderWithLabelForm
                questionText={"test-question-slider"}
                options={options}
                formState={formState}
                setFormState={setFormState}
            />,
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should render Container properly", () => {
        expect(screen.getByTestId("slider-with-label-form")).toBeInTheDocument();
    });

    test("should render min, max label properly", () => {
        expect(screen.getByText("label1")).toBeInTheDocument();
        expect(screen.getByText("label3")).toBeInTheDocument();
    });
});
