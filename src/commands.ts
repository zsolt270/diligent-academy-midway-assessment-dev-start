import { Recipe, RecipeType } from "./recipe";
import { Store } from "./stores/store.type";
import { validateListParams } from "./validators";

export async function list(store: Store<RecipeType[]>, args: string[]) {
	// if (args.length != 0) {
	// 	console.log("Error: The list command should not have any argument.");
	// 	return;
	// }
	validateListParams(args);
	const recipe = new Recipe(store);
	const recipes = await recipe.readAll();
	const formatted = recipes
		.map((recipe) => `- [${recipe.id}] ${recipe.name}`)
		.join("\n");
	console.log("Your recipes:");
	console.log(formatted);
}
