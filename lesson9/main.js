function findById(items, id) {
    for (var i in items) {
        if (items[i].id == id) {
            return items[i];
        }
    }
    return null;
}

Vue.component('selectcategory', {
    template: "#select_category_tpl",
    props: ['categories', 'id']
});

var vm = new Vue ({
    el: 'body',
    data: {
        notes: [
            {
                name: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                category_id: 1
            },
            {
                name: 'Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                category_id: 2
            },
            {
                name: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                category_id: 1
            }
        ],
        categories: [
            {
                id: 1,
                name: "tempor"
            },
            {
                id: 2,
                name: "proident"
            }
        ],
    },

    methods: {
            deleteNote: function (note) {
                this.notes.$remove(note);
            },
            editNote: function (note) {
                Vue.set(note, 'editing', true);
            },
            updateNote: function (note) {
                note.editing = false ;
            }
    },

    filters: {
        category:  function (category_id) {
            var category = findById(this.categories, category_id);

            return category !== null ? category.name : 'S/C';
        }
    }
});
