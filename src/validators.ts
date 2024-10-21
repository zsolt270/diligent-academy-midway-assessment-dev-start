export function validateListParams(args: string[]) {
	if (args.length != 0) {
		throw new Error("Error: The list command should not have any argument.");
		return;
	}
}
