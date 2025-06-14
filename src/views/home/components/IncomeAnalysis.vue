<template>
  <div class="income-analysis">
    <!-- 图表容器 -->
    <div ref="chartRef" class="chart-container"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const chartRef = ref<HTMLElement>();
let myChart: echarts.ECharts | null = null;

const props = defineProps<{
  data: any[];
}>();

// 初始化图表
const initChart = (data: any[]) => {
  if (!chartRef.value) return;

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: [t('income'), t('expense')],
      // right: 10,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: data.map((item) => item.date),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: t('income'),
        type: 'bar',
        data: data.map((item) => item.income),
        itemStyle: {
          color: '#07c160',
        },
      },
      {
        name: t('expense'),
        type: 'bar',
        data: data.map((item) => item.expense),
        itemStyle: {
          color: '#ee0a24',
        },
      },
    ],
  };

  if (!myChart) {
    myChart = echarts.init(chartRef.value);
  }
  myChart.setOption(option);
};

watchEffect(() => {
  if (props.data && props.data.length > 0) {
    initChart(props.data);
  }
});

// 生命周期钩子
onMounted(() => {
  // 确保图表容器已渲染
  initChart(props.data);
  // 监听窗口大小变化
  window.addEventListener('resize', () => {
    myChart?.resize();
  });
});

onUnmounted(() => {
  // 销毁图表实例
  myChart?.dispose();
  window.removeEventListener('resize', () => {
    myChart?.resize();
  });
});
</script>

<style lang="scss" scoped>
.income-analysis {
  background: #fff;
  border-radius: 8px;
}

.chart-container {
  height: 300px;
  width: 100%;
}

:deep(.van-tabs__wrap) {
  padding: 0 16px;
}
</style>
