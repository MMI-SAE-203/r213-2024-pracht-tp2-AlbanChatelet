/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nwljrcgvs9mq481")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "njpop0zi",
    "name": "id_agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "34n23iqqlobikga",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nwljrcgvs9mq481")

  // remove
  collection.schema.removeField("njpop0zi")

  return dao.saveCollection(collection)
})
