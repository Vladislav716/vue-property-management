<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
  name: 'bar-chart',
  extends: Bar,
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
    updateGradients(chartData) {
      if(!chartData) return;
    }
  },
  mounted() {
    this.$watch('chartData', (newVal, oldVal) => {
      this.updateGradients(newVal);
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