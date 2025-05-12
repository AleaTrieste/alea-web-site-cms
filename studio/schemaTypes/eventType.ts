import { defineField, defineType} from "sanity";

export default defineType({
    name: "event",
    title: "Evento",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Titolo",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Descrizione",
            type: "blockContent"
        }),
        defineField({
            name: "shortDescription",
            title: "Descrizione breve",
            type: "text"
        }),
        defineField({
            name: "dateStart",
            title: "Data inizio",
            type: "datetime"
        }),
        defineField({
            name: "dateEnd",
            title: "Data fine",
            type: "datetime"
        }),
        defineField({
            name: "geoLocation",
            title: "Coordinate luogo",
            type: "geopoint"
        }),
        defineField({
            name: "location",
            title: "Luogo",
            type: "string"
        }),
        defineField({
            name: "poster",
            title: "Locandina",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "links",
            title: "Link utili",
            type: "array",
            of: [
                {
                    name: "link",
                    title: "Link",
                    type: "url"
                }
            ]
        })

    ]
})
