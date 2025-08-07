import {rawRecipeGroupsData} from "./rawRecipesData.js";

/**
 * В итоге получаем:
 *  - `recipeGroups`  – группы с массивом рецептов, у которых уже есть id
 *  - `recipesById`   – Map для быстрого поиска
 *  - `flatRecipes`   – один плоский массив (если понадобится)
 */

export function generateIds() {
    let autoId = 1;
    return rawRecipeGroupsData.map(group => ({
        ...group,
        recipes: group.recipes.map(r => ({
            id: autoId++,
            ...r,
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

export const recipeGroupsData = generateIds(); // Исходный массив но с id
export const recipesFlat = recipeGroupsData.flatMap(group => group.recipes); // Список всех рецептов
export const recipeById = buildLookup(recipesFlat); // Мапа id -> recipeObj

