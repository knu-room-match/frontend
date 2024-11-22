"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "@/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.test.json",
        },
    },
};
exports.default = config;
