angular.module('comments', [])
    .component('comments', {
        controller: [ function() {
            var $ctrl = this;
            $ctrl.items = [];

            $ctrl.getItems = function () {
                if(localStorage.getItem("items")) {
                    $ctrl.items = JSON.parse(localStorage.getItem("items"));
                }
            };
            $ctrl.getItems();

            $ctrl.addItem = function () {
                $ctrl.items.push({
                    id : Date.now(),
                    name : $ctrl.itemName,
                    comments: []
                });
                localStorage.setItem("items", JSON.stringify($ctrl.items));
                $ctrl.itemName = "";
            };
            $ctrl.deleteItem = function (id) {
                var itemsAfterDelete = [];
                angular.forEach($ctrl.items, function(value, key) {
                    if(value.id != id) {
                        itemsAfterDelete.push(value);
                        if($ctrl.itemComments.id == id) {
                            $ctrl.itemComments = false;
                        }
                    }
                });
                $ctrl.items = itemsAfterDelete;
                localStorage.setItem("items", JSON.stringify($ctrl.items));
            };

            $ctrl.showComments = function (id) {
                angular.forEach($ctrl.items, function(value, key) {
                    if(value.id == id) {
                        $ctrl.itemComments = value;
                    }
                });
            };
            $ctrl.addComment = function(keyEvent) {
                if (keyEvent.which === 13) {
                    console.log($ctrl.itemComments);
                    $ctrl.itemComments.comments.push($ctrl.comment)
                    $ctrl.comment = "";
                    localStorage.setItem("items", JSON.stringify($ctrl.items));
                }
            }
        }],
    templateUrl: "./modules/comments/comments.html"
});
