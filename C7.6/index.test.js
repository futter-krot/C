import { reverseString } from "./index.js"
describe("Reverse string testing", () => {
	it("reverse test", () => {
		expect(reverseString("hello")).toBe("olleh")
	}),
	it("reverse test", () => {
		expect(reverseString(1)).toBe("Error")
	})
})