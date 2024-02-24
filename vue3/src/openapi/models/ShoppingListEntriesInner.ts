/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FoodPropertiesFoodUnit } from './FoodPropertiesFoodUnit';
import {
    FoodPropertiesFoodUnitFromJSON,
    FoodPropertiesFoodUnitFromJSONTyped,
    FoodPropertiesFoodUnitToJSON,
} from './FoodPropertiesFoodUnit';
import type { IngredientFood } from './IngredientFood';
import {
    IngredientFoodFromJSON,
    IngredientFoodFromJSONTyped,
    IngredientFoodToJSON,
} from './IngredientFood';
import type { ShoppingListEntriesInnerCreatedBy } from './ShoppingListEntriesInnerCreatedBy';
import {
    ShoppingListEntriesInnerCreatedByFromJSON,
    ShoppingListEntriesInnerCreatedByFromJSONTyped,
    ShoppingListEntriesInnerCreatedByToJSON,
} from './ShoppingListEntriesInnerCreatedBy';
import type { ShoppingListEntriesInnerRecipeMealplan } from './ShoppingListEntriesInnerRecipeMealplan';
import {
    ShoppingListEntriesInnerRecipeMealplanFromJSON,
    ShoppingListEntriesInnerRecipeMealplanFromJSONTyped,
    ShoppingListEntriesInnerRecipeMealplanToJSON,
} from './ShoppingListEntriesInnerRecipeMealplan';

/**
 * 
 * @export
 * @interface ShoppingListEntriesInner
 */
export interface ShoppingListEntriesInner {
    /**
     * 
     * @type {number}
     * @memberof ShoppingListEntriesInner
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof ShoppingListEntriesInner
     */
    listRecipe?: number | null;
    /**
     * 
     * @type {IngredientFood}
     * @memberof ShoppingListEntriesInner
     */
    food: IngredientFood | null;
    /**
     * 
     * @type {FoodPropertiesFoodUnit}
     * @memberof ShoppingListEntriesInner
     */
    unit?: FoodPropertiesFoodUnit | null;
    /**
     * 
     * @type {string}
     * @memberof ShoppingListEntriesInner
     */
    amount: string;
    /**
     * 
     * @type {number}
     * @memberof ShoppingListEntriesInner
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ShoppingListEntriesInner
     */
    checked?: boolean;
    /**
     * 
     * @type {ShoppingListEntriesInnerRecipeMealplan}
     * @memberof ShoppingListEntriesInner
     */
    recipeMealplan?: ShoppingListEntriesInnerRecipeMealplan;
    /**
     * 
     * @type {ShoppingListEntriesInnerCreatedBy}
     * @memberof ShoppingListEntriesInner
     */
    createdBy?: ShoppingListEntriesInnerCreatedBy;
    /**
     * 
     * @type {Date}
     * @memberof ShoppingListEntriesInner
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ShoppingListEntriesInner
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ShoppingListEntriesInner
     */
    completedAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ShoppingListEntriesInner
     */
    delayUntil?: Date | null;
}

/**
 * Check if a given object implements the ShoppingListEntriesInner interface.
 */
export function instanceOfShoppingListEntriesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "food" in value;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function ShoppingListEntriesInnerFromJSON(json: any): ShoppingListEntriesInner {
    return ShoppingListEntriesInnerFromJSONTyped(json, false);
}

export function ShoppingListEntriesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShoppingListEntriesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'listRecipe': !exists(json, 'list_recipe') ? undefined : json['list_recipe'],
        'food': IngredientFoodFromJSON(json['food']),
        'unit': !exists(json, 'unit') ? undefined : FoodPropertiesFoodUnitFromJSON(json['unit']),
        'amount': json['amount'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'checked': !exists(json, 'checked') ? undefined : json['checked'],
        'recipeMealplan': !exists(json, 'recipe_mealplan') ? undefined : ShoppingListEntriesInnerRecipeMealplanFromJSON(json['recipe_mealplan']),
        'createdBy': !exists(json, 'created_by') ? undefined : ShoppingListEntriesInnerCreatedByFromJSON(json['created_by']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'completedAt': !exists(json, 'completed_at') ? undefined : (json['completed_at'] === null ? null : new Date(json['completed_at'])),
        'delayUntil': !exists(json, 'delay_until') ? undefined : (json['delay_until'] === null ? null : new Date(json['delay_until'])),
    };
}

export function ShoppingListEntriesInnerToJSON(value?: ShoppingListEntriesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'list_recipe': value.listRecipe,
        'food': IngredientFoodToJSON(value.food),
        'unit': FoodPropertiesFoodUnitToJSON(value.unit),
        'amount': value.amount,
        'order': value.order,
        'checked': value.checked,
        'recipe_mealplan': ShoppingListEntriesInnerRecipeMealplanToJSON(value.recipeMealplan),
        'created_by': ShoppingListEntriesInnerCreatedByToJSON(value.createdBy),
        'completed_at': value.completedAt === undefined ? undefined : (value.completedAt === null ? null : value.completedAt.toISOString()),
        'delay_until': value.delayUntil === undefined ? undefined : (value.delayUntil === null ? null : value.delayUntil.toISOString()),
    };
}
