/**
 * The hero object contains a lot of data, returning all of this can make the json more difficult to read and complicate
 * learning.
 * Decide which fields to keep so the response is uncluttered and easy to read.
 * @param {id, name, image, powerstats, ...} hero
 */
const stripUnusedFields = hero => {
    // All the fields mentioned here are just the ones to keep.
    const { id, name, image, powerstats, error } = hero;
    return { id, name, image, powerstats, error };
  };

exports.stripUnusedFields = stripUnusedFields