export function validateListParams(args: string[]) {
	if (args.length != 0) {
		throw new Error("Error: The list command should not have any argument.");
	}
}

export function validateDetailsParams(id: number) {
	if (isNaN(id)) {
		throw new Error("Error: The ID must be a number.");
	}
}
