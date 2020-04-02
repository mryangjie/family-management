<template>
    <div class="line-tree-page">
        <div ref="myDiagramDiv" class="myDiagramDiv"></div>
    </div>
</template>

<script>
let go = window.go
let $ = go.GraphObject.make
export default {
    name: 'line-tree',
    data() {
        return {
            nodeDataArray: [
                { key: 0, name: "George V", gender: "M", birthYear: "1865", deathYear: "1936", reign: "1910-1936" },
                { key: 1, parent: 0, name: "Edward VIII", gender: "M", birthYear: "1894", deathYear: "1972", reign: "1936" },
                { key: 2, parent: 0, name: "George VI", gender: "M", birthYear: "1895", deathYear: "1952", reign: "1936-1952" },
                { key: 7, parent: 0, name: "Elizabeth II", gender: "F", birthYear: "1926", reign: "1952-" },
                { key: 16, parent: 1, name: "Charles, Prince of Wales", gender: "M", birthYear: "1948" },
                { key: 38, parent: 2, name: "Prince William", gender: "M", birthYear: "1982" },
                { key: 39, parent: 7, name: "Prince Harry of Wales", gender: "M", birthYear: "1984" },
                { key: 17, parent: 7, name: "Anne, Princess Royal", gender: "F", birthYear: "1950" },
                { key: 40, parent: 0, name: "Peter Phillips", gender: "M", birthYear: "1977" },
                { key: 41, parent: 2, name: "Zara Phillips", gender: "F", birthYear: "1981" },
                { key: 18, parent: 2, name: "Prince Andrew", gender: "M", birthYear: "1960" },
            ]
        }
    },
    methods: {
        nodeSelectionChanged() {
            this.$emit('send-node')
        },
        pageInit() {
            let myDiagram =
                $(go.Diagram, this.$refs.myDiagramDiv,  // must be the ID or reference to div
                    {
                        initialContentAlignment: go.Spot.Center,
                        "toolManager.hoverDelay": 100,  // 100 milliseconds instead of the default 850
                        allowCopy: false,
                        layout:  // create a TreeLayout for the family tree
                            $(go.TreeLayout,
                                { angle: 90, nodeSpacing: 10, layerSpacing: 40, layerStyle: go.TreeLayout.LayerUniform })
                    });

            var bluegrad = '#90CAF9';
            var pinkgrad = '#F48FB1';

            // Set up a Part as a legend, and place it directly on the diagram
            myDiagram.add(
                $(go.Part, "Table",
                    { position: new go.Point(300, 10), selectable: false },
                ));

            // get tooltip text from the object's data
            function tooltipTextConverter(person) {
                var str = "";
                str += "Born: " + person.birthYear;
                if (person.deathYear !== undefined) str += "\nDied: " + person.deathYear;
                if (person.reign !== undefined) str += "\nReign: " + person.reign;
                return str;
            }

            // define tooltips for nodes
            var tooltiptemplate =
                $("ToolTip",
                    { "Border.fill": "whitesmoke", "Border.stroke": "black" },
                    $(go.TextBlock,
                        {
                            font: "bold 8pt Helvetica, bold Arial, sans-serif",
                            wrap: go.TextBlock.WrapFit,
                            margin: 5
                        },
                        new go.Binding("text", "", tooltipTextConverter))
                );

            // define Converters to be used for Bindings
            function genderBrushConverter(gender) {
                if (gender === "M") return bluegrad;
                if (gender === "F") return pinkgrad;
                return "orange";
            }

            // replace the default Node template in the nodeTemplateMap
            myDiagram.nodeTemplate =
                $(go.Node, "Auto",
                    { deletable: false, toolTip: tooltiptemplate },
                    { selectionChanged: this.nodeSelectionChanged },
                    new go.Binding("text", "name"),
                    $(go.Shape, "Rectangle",
                        {
                            fill: "lightgray",
                            stroke: null, strokeWidth: 0,
                            stretch: go.GraphObject.Fill,
                            alignment: go.Spot.Center
                        },
                        new go.Binding("fill", "gender", genderBrushConverter)),
                    $(go.TextBlock,
                        {
                            font: "700 12px Droid Serif, sans-serif",
                            textAlign: "center",
                            margin: 10, maxSize: new go.Size(80, NaN)
                        },
                        new go.Binding("text", "name"))

                );

            // define the Link template
            myDiagram.linkTemplate =
                $(go.Link,  // the whole link panel
                    { routing: go.Link.Orthogonal, corner: 5, selectable: false },
                    $(go.Shape, { strokeWidth: 3, stroke: '#424242' }));  // the gray link shape

            // create the model for the family tree
            myDiagram.model = new go.TreeModel(this.nodeDataArray);

            document.getElementById('zoomToFit').addEventListener('click', function () {
                myDiagram.commandHandler.zoomToFit();
            });

            document.getElementById('centerRoot').addEventListener('click', function () {
                myDiagram.scale = 1;
                myDiagram.scrollToRect(myDiagram.findNodeForKey(0).actualBounds);
            });


        }
    },
    mounted() {
        this.pageInit();
    },
}
</script>

<style lang="scss" scoped>
.line-tree-page {
    height: 100%;
    .myDiagramDiv {
        width: 100%;
        height: 100%;
        background-color: #dae4e4;
    }
}
</style>