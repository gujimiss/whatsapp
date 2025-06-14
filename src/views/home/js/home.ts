

import { showToast } from "vant";

type rengeOptionsType = {
  text: string;
  value: string;
}

type EechartsType = {
  date: string;
  income: number;
  expense: number;
}

interface useExampleReturn {
  analysisRange: Ref<string>;
  rangeOptions: Ref<Array<rengeOptionsType>>;
  active: Ref<string>;
  rankingList: Ref<Array<{ id: number; name: string; accounts: number; invited: number; income: string }>>;
  showNotice: (type: string) => void;
  goInvited: () => void;
  goInvite: () => void;
  goProfile: () => void;
  goWallet: () => void;
  goBalance: () => void;
  goAccounts: () => void;
  goIncomeRecords: () => void;
  handleRangeChange: (value: string) => void;
  echartsData: Ref<EechartsType[]>;
}

export function useExample($t: Function): useExampleReturn {

  const router = useRouter();

  const analysisRange = ref("7");
  const rangeOptions = computed(() => {
    return [
      { text: $t('last7Days'), value: '7' },
      { text: $t('last30Days'), value: '30' },
    ]
  });

  const active = ref("总排行");
  const rankingList = ref([
    { id: 1, name: "Aziz Bakree", accounts: 107, invited: 219, income: "5,894" },
    { id: 2, name: "Griezerman", accounts: 106, invited: 215, income: "5,600" },
    { id: 3, name: "Oconner", accounts: 104, invited: 210, income: "5,400" },
    { id: 4, name: "Uli Trumb", accounts: 102, invited: 219, income: "5,300" },
    // ...虚拟数据
  ]);

  function showNotice(type: string) {
    if (type === "account") router.push("/information");
    if (type === "message") router.push("/information");;
    if (type === "gift") goBalance();
  }
  function goWallet() {
    showToast("进入钱包页面");
  }

  function goBalance() {
    showToast("进入余额页面");
    router.push("/balanceChanges");
  }
  function goAccounts() {
    showToast("进入已连接账户列表");
    router.push("/AFKAccount");
  }
  function goInvited() {
    showToast("进入已邀请用户列表");
    router.push("/invite");
  }
  function goIncomeRecords() {
    showToast("进入资金变动记录");
  }

  function goArticles() {
    showToast("文章列表");
    router.push("/information");
  }
  function goLinkAccount() {
    showToast("链接账号");
    router.push("/AFKAccount");
  }
  function goInvite() {
    showToast("邀请好友");
    router.push("/invite");
  }
  function goProfile() {
    showToast("个人中心");
    router.push("/user");
  }

  /**
   * 图标模块相关逻辑
   * 
   * **/
  let echartsData = ref<EechartsType[]>([])
  // 模拟数据生成函数
  const generateMockData = (days: number) => {
    const data = [];
    const now = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      data.push({
        date: `${date.getMonth() + 1}/${date.getDate()}`,
        income: Math.floor(Math.random() * 1000),
        expense: Math.floor(Math.random() * 500),
      });
    }
    return data;
  };
  // 处理时间范围变化
  const handleRangeChange = (value: string) => {
    const days = parseInt(value)
    echartsData.value = generateMockData(days)
  }
  handleRangeChange(analysisRange.value);

  return {
    analysisRange,
    rangeOptions,
    active,
    rankingList,
    showNotice,
    goInvited,
    goInvite,
    goProfile,
    goWallet,
    goBalance,
    goAccounts,
    goIncomeRecords,
    handleRangeChange,
    echartsData
  }
}


