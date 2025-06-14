
import { showToast } from "vant";

type levelOneUsersType = {
  id: number;
  name: string;
  income: number; // 用户带来的收益
  accounts: number; // 用户账号数量
  subordinates: number; // 下级用户数量
  inviteTime: string; // 邀请时间
}

interface useExampleReturn {
  totalInvited: Ref<number>;
  totalIncome: Ref<number>;
  inviteLink: Ref<string>;
  activeTab: Ref<number>;
  levelOneUsers: Ref<Array<levelOneUsersType>>;
  levelTwoUsers: Ref<Array<levelOneUsersType>>;
  copyLink: () => void;
  onSearch: (val: string) => void;
}

export function useExample($t: Function): useExampleReturn {
  // 邀请统计数据
  const totalInvited = ref(50) // 已成功邀请的用户数量
  const totalIncome = ref(1200.5) // 邀请用户带来的总收益

  // 邀请链接
  const inviteLink = ref('https://example.com/invite?code=123456')

  // TAB 切换
  const activeTab = ref(0)

  // 用户列表数据
  const levelOneUsers = ref([
    { id: 1, name: 'User B1', income: 300, accounts: 100, subordinates: 5, inviteTime: '2023-01-01' },
    { id: 2, name: 'User B2', income: 200, accounts: 80, subordinates: 3, inviteTime: '2023-02-01' },
    { id: 3, name: 'User B3', income: 150, accounts: 60, subordinates: 2, inviteTime: '2023-03-01' },
  ])
  const levelTwoUsers = ref([
    { id: 1, name: 'User B1', income: 300, accounts: 100, subordinates: 5, inviteTime: '2023-01-01' },
    { id: 2, name: 'User B2', income: 200, accounts: 80, subordinates: 3, inviteTime: '2023-02-01' },
    { id: 3, name: 'User B3', income: 150, accounts: 60, subordinates: 2, inviteTime: '2023-03-01' },
  ])

  // 复制邀请链接
  const copyLink = () => {
    navigator.clipboard.writeText(inviteLink.value).then(() => {
      showToast($t('copySuccess'))
    })
  }

  const onSearch = (val: string) => {
    console.log('搜索关键词：', val);
    // TODO: 实现搜索逻辑
  };

  return {
    totalInvited,
    totalIncome,
    inviteLink,
    activeTab,
    levelOneUsers,
    levelTwoUsers,
    copyLink,
    onSearch
  }
}
