webix.ready(function() {
  webix.ui({
    rows: [
      {
        view: "datatable",
        id: "dt1",
        editable: true,
        columns: [
          { header: "", css: "rank", width: 30, sort: "int" },
          { id: "title", header: "Title", width: 300, sort: "string", editor: "text" },
          { id: "description", header: ["description", { content: "selectFilter" }], width: 300, sort: "int", editor: "text" },
          { id: "date", header: "Date", width: 300, editor: "date" },
          { id: "", template: "{common.trashIcon()}", width: 50 },
          { fillspace: true }
        ],
        onClick: {
          "wxi-trash": function(e, id) {
            this.remove(id);
            return false;
          }
        },
        autoheight: true,
        scrollX: false,
        url: "http://localhost:3003/posts",
        save: "rest->http://localhost:3003/posts"
      },
      {
        view: "button",
        value: "Add Row",
        width: 100,
        click: function() {
          $$("dt1").add({
            id: webix.uid(),
            title: "new",
            description: "new description",
            date: new Date()
          });
        }
      }
    ]
  });
});
