var tree;

function setup() {
    noCanvas();
    tree = new Tree();
    for (var i = 0; i < 10; i++) {
        tree.addValue(floor(random(100)));
    }
    console.log(tree);
    tree.traverse();
    var result = tree.search(10);
    if(result == null){
        console.log("not found 10");
    } else {
        console.log(result);
    }
}
