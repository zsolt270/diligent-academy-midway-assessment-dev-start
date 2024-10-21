import { Recipe, RecipeType } from "./recipe";
import { Store } from "./stores/store.type";
import { validateListParams, validateDetailsParams } from "./validators";

export async function list(store: Store<RecipeType[]>, args: string[]) {
	validateListParams(args);
	const recipe = new Recipe(store);
	const recipes = await recipe.readAll();
	const formatted = recipes
		.map((recipe) => `- [${recipe.id}] ${recipe.name}`)
		.join("\n");
	console.log("Your recipes:");
	console.log(formatted);
}

export async function details(store: Store<RecipeType[]>, args: string[]) {
	const [id] = args;
	const idAsNumber = parseInt(id);
	validateDetailsParams(idAsNumber);

	const recipe = new Recipe(store);
	const recipes = await recipe.readAll();
	const details = recipes.filter((recipe) => {
		return recipe.id == idAsNumber;
	});

	console.log(`The recipe with the ${id} id:`);
	console.log(details);
}
