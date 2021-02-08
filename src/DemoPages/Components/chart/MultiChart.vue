<script>
  import { Line, mixins } from 'vue-chartjs';
    export default {
      name: 'multi-chart',
      extends: Line,
      mixins: [mixins.reactiveProp],
      props: {
        extraOptions: Object,
      },
      data() {
        return {
          ctx: null
        };
      },
      methods: {
      
      },
      mounted() {
        this.$watch('chartData', (newVal, oldVal) => {
          if (!oldVal) {
            this.renderChart(
              this.chartData,
              this.extraOptions
            );
          }
        }, { immediate: true });
      }
    };

</script>