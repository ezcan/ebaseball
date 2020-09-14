<template lang="pug">
    .container.batter-counter
        .counter-input
            label 打擊率
                input(v-model="avg" type="number" step="0.01" min="0" max="1" placeholder="打擊率...")
            label 長打率
                input(v-model="slg" type="number" step="0.01" min="0" max="1" placeholder="長打率...")
            label 全壘打    
                input(v-model="hr" type="number" step="1" min="0" placeholder="全壘打...")
            label 安打
                input(v-model="hit" type="number" step="10" min="0" placeholder="安打...")
        .counter-result
            .attr-rank
                .rank-text(:class="getRank(meetCtrl)") {{getRank(meetCtrl)}}
                .rank-value {{meetCtrl}}
            .attr-rank
                .rank-text(:class="getRank(power)") {{getRank(power)}}
                .rank-value {{power}}
</template>

<script>

export default {
    name: 'BatterCounter',
    data(){
        return {
            avg: .28,
            slg: .4,
            hr: 0,
            hit: 80,
        }
    },
    computed: {
        iso(){
            return this.slg - this.avg
        },
        meetCtrl(){
            const THRESHOLD = 0.28;
            const BONUS = 0.025;
            const MIN = 10;
            const RANK_DREGEE = 0.004;
            const BASE = 40;
            const MAX = 100;
            return Math.min( Math.max(
                    BASE + Math.round((this.avg - THRESHOLD) / RANK_DREGEE) + 
                    Math.round(this.hit * BONUS)
                , MIN), MAX)
        },
        power(){
            const THRESHOLD = 0.15;
            const BONUS = 1;
            const MIN = 20;
            const BASE = 40;
            const RANK_DREGEE = 0.004;
            const MAX = 100;
            return Math.min( Math.max(
                    BASE + Math.round((this.iso - THRESHOLD) / RANK_DREGEE) + 
                    Math.min( Math.ceil(this.hr * BONUS), 10)
                , MIN), MAX)
        }
    },
    methods: {
        getRank(val){
            const rank = Math.floor(val / 10)
            const classes = {
                0: 'G', 1: 'G',
                2: 'F', 3: 'F',
                4: 'E',
                5: 'D',
                6: 'C',
                7: 'B',
                8: 'A',
                9: 'S', 10: 'S'
            }
            return classes[rank]
        }
    }
}
</script>

<style lang="scss" scoped>
.batter-counter{
    display: flex;
    align-content: center;
    justify-content: center;
}
.counter-input{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.counter-result{
    flex: 1;
    display: flex;
    align-items: center;
}
.attr-rank{
    flex: 1;
    max-width: 120px;
}
.rank-text{
    font-size: 2em;
    &.S{
        color: #FF0000
    }
    &.A{
        color: #EE4266
    }
    &.B{
        color: #FF0000
    }
    &.C{
        color: #FF9914
    }
    &.D{
        color: #EBE847
    }
    &.E{
        color: #23967F
    }
    &.F{
        color: #BADEFC
    }
    &.G{
        color: #CCCCCC
    }
}
</style>