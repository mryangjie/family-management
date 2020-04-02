<template>
    <div class="page-view">
        <TreeChart :json="treeData" id="6"></TreeChart>
    </div>
</template>



<script>
    import TreeChart from '@/components/Treechart/tree.vue'
    export default {
        components: {
            TreeChart
        },
        data(){
            return {
                 treeData: {
                    partnerName: '刘振中',
                    proportionShares: '100',
                    partnerType: 2,
                    id: 1,
                    childers: [{
                    partnerName: '刘振中',
                    proportionShares: '50',
                    partnerType: 1,
                    id: 2,
                    partnerCode: 1,
                      childers:[
                          {
                    partnerName: '刘振中',
                    proportionShares: '50',
                    partnerType: 1,
                    id: 2,
                    partnerCode: 1
                    },
                      ]
                    }, {
                    partnerName: '刘振中',
                    proportionShares: '20',
                    partnerType: 1,
                    id: 4,
                    partnerCode: 1
                    }, {
                    partnerName: '刘振中',
                    proportionShares: '20',
                    partnerType: 2,
                    id: 5,
                    partnerCode: 1
                    }, {
                    partnerName: '刘振中',
                    proportionShares: '10',
                    partnerType: 3,
                    id: 6,
                    partnerCode: 1
                    }]
                }
            }
        }
    }
</script>

<style lang="scss">
</style>