import {rawRecipeGroupsData} from "./rawRecipesData.js";

/**
 * В итоге получаем:
 *  - `recipeGroups`  – группы с массивом рецептов, у которых уже есть id
 *  - `recipesById`   – Map для быстрого поиска
 *  - `flatRecipes`   – один плоский массив (если понадобится)
 */

const imgPath = "img/recipes/"

export function handleRawRecipesData() {
    let autoId = 1;
    return rawRecipeGroupsData.map(group => ({
        ...group,
        recipes: group.recipes.map(recipe => ({
            id: autoId++,
            ...recipe,
            img: recipe.img ? imgPath + recipe.img : null,
        }))
    }));
}

/**
 * Быстрый «словарь» id → рецепт.
 * Функция создаётся только один раз, поэтому `new Map` не тратит лишних ресурсов.
 */

export function buildLookup(recipesFlat) {
    const map = new Map();
    for (const r of recipesFlat) {
        map.set(r.id, r);
    }
    return map;
}

/**
 * Генерируем «памяти» за один раз и экспортируем.
 */

export const recipeGroupsData = handleRawRecipesData(); // Исходный массив но с id
console.log(recipeGroupsData);
export const recipesFlat = recipeGroupsData.flatMap(group => group.recipes); // Список всех рецептов
export const recipeById = buildLookup(recipesFlat); // Мапа id -> recipeObj

