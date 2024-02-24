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
/**
 * 
 * @export
 * @interface BookmarkletImport
 */
export interface BookmarkletImport {
    /**
     * 
     * @type {number}
     * @memberof BookmarkletImport
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof BookmarkletImport
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BookmarkletImport
     */
    html: string;
    /**
     * 
     * @type {string}
     * @memberof BookmarkletImport
     */
    readonly createdBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof BookmarkletImport
     */
    readonly createdAt?: Date;
}

/**
 * Check if a given object implements the BookmarkletImport interface.
 */
export function instanceOfBookmarkletImport(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "html" in value;

    return isInstance;
}

export function BookmarkletImportFromJSON(json: any): BookmarkletImport {
    return BookmarkletImportFromJSONTyped(json, false);
}

export function BookmarkletImportFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookmarkletImport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'html': json['html'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
    };
}

export function BookmarkletImportToJSON(value?: BookmarkletImport | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'html': value.html,
    };
}
