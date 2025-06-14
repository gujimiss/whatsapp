
import { showToast } from "vant";

type recordListType = {
  id: number;
  type: string; // 提现或收入
  amount: number; // 金额，正数为收入，负数为提现
  time: string; // 时间戳
}

interface useExampleReturn {
  balanceInfo: Ref<{ available: number; frozen: number }>;
  recordList: Ref<recordListType[]>;
  loading: Ref<boolean>;
  finished: Ref<boolean>;
  refreshing: Ref<boolean>;
  showWithdraw: Ref<boolean>;
  handleWithdraw: () => void;
  onWithdrawSubmit: (values: any) => void;
  onRefresh: () => void;
  onLoad: () => void;
  onSearch: (val: string) => void;
}

export function useExample($t: Function): useExampleReturn {

  // 余额信息
  const balanceInfo = ref({
    available: 1000.0,
    frozen: 200.0,
  });

  // 余额记录列表
  const recordList = ref([
    { id: 1, type: "提现", amount: -100, time: "2025-06-03 14:30:00" },
    { id: 2, type: "收入", amount: 200, time: "2025-06-03 10:20:00" },
  ]);

  // 列表加载相关
  const loading = ref(false);
  const finished = ref(false);
  const refreshing = ref(false);

  // 提现操作
  const showWithdraw = ref(false);

  const handleWithdraw = () => {
    showWithdraw.value = true;
  };
  // 处理提现提交
  const onWithdrawSubmit = (values: any) => {
    console.log("提现信息：", values);
    // TODO: 调用提现API
    showToast("提现申请已提交");
    showWithdraw.value = false;
  };

  // 下拉刷新
  const onRefresh = () => {
    // 重置列表状态
    finished.value = false;
    refreshing.value = false;
    recordList.value = [];
    // 重新加载数据
    onLoad();
  };

  // 加载更多
  const onLoad = () => {
    // 模拟异步加载
    setTimeout(() => {
      // TODO: 调用API获取数据
      loading.value = false;

      // 判断是否加载完成
      if (recordList.value.length >= 40) {
        finished.value = true;
      }
    }, 1000);
  };

  const onSearch = (val: string) => {
    console.log('搜索关键词：', val);
    // TODO: 实现搜索逻辑
  };

  return {
    balanceInfo,
    recordList,
    loading,
    finished,
    refreshing,
    showWithdraw,
    handleWithdraw,
    onWithdrawSubmit,
    onRefresh,
    onLoad,
    onSearch
  }
}
