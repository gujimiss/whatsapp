

type accountsType = {
  id: number;
  app: string;
  connectTime: string;
  duration: string;
  totalIncome: number;
  account: string;
  status: string
}

interface useExampleReturn {
  searchText: Ref<string>;
  showModal: Ref<boolean>;
  selectedApp: Ref<string>;
  deviceCode: Ref<string>;
  showConnectionModal: Ref<boolean>;
  accounts: Ref<Array<accountsType>>;
  selectedConnection: Ref<string>;
  phoneNumber: Ref<string>;
  onSearch: (val: string) => void;
  showAddAccountModal: () => void;
  showConnectionOptions: () => void;
  connectAccount: () => void;
}

export function useExample($t: Function): useExampleReturn {

  // 弹窗状态
  const showModal = ref(false);
  const showConnectionModal = ref(false);

  // 选择的 APP 和连接方式
  const selectedApp = ref('');
  const selectedConnection = ref('');

  // 输入框数据
  const phoneNumber = ref('');
  const deviceCode = ref('');

  // 已挂机账号列表
  const accounts = ref([
    {
      id: 1,
      app: 'Whatsapp',
      connectTime: '2025-05-01 12:00',
      duration: '2h 30m',
      totalIncome: 15.5,
      account: 'user1',
      status: 'Connected',
    },
    {
      id: 2,
      app: 'Whatsapp',
      connectTime: '2025-05-02 14:00',
      duration: '1h 45m',
      totalIncome: 10.0,
      account: 'user2',
      status: 'Connected',
    },
  ]);

  // 搜索相关
  const searchText = ref('');
  const onSearch = (val: string) => {
    console.log('搜索关键词：', val);
    // TODO: 实现搜索逻辑
  };

  // 显示添加账号弹窗
  const showAddAccountModal = () => {
    showModal.value = true;
  };

  // 显示连接方式弹窗
  const showConnectionOptions = () => {
    if (!selectedApp.value) {
      return alert($t('selectAppAlert'));
    }
    showModal.value = false;
    showConnectionModal.value = true;
  };

  // 连接账号
  const connectAccount = () => {
    if (selectedConnection.value === 'DeviceCode' && (!phoneNumber.value || !deviceCode.value)) {
      return alert($t('fillDeviceCode'));
    }
    showConnectionModal.value = false;
    alert($t('connectedSuccess'));
  };

  return {
    searchText,
    showModal,
    selectedApp,
    deviceCode,
    showConnectionModal,
    onSearch,
    accounts,
    selectedConnection,
    phoneNumber,
    showAddAccountModal,
    showConnectionOptions,
    connectAccount
  }
}
