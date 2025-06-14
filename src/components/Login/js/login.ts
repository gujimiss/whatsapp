interface AreaCodeOption {
  text: string;
  value: string;
}

interface UseExampleReturn {
  showPopover: Ref<boolean>;
  areaCodeOptions: AreaCodeOption[];
  areaCode: Ref<string>;
  phone: Ref<string>;
  password: Ref<string>;
  onSelect: (action: AreaCodeOption) => void;
  handleLogin: () => void;
  handleRegister: () => void;
}

type EmitFn = (event: 'change', ...args: any[]) => void;

export function useExample(emit: EmitFn): UseExampleReturn {

  const router = useRouter();

  // const auth = useAuthStore();
  // console.log("auth", auth);
  // auth.setToken("123456");
  // console.log("auth", auth);

  // 区号选项
  const showPopover = ref<boolean>(false);
  const areaCodeOptions: AreaCodeOption[] = [
    { text: "+86", value: "+86" },
    { text: "+1", value: "+1" },
    { text: "+44", value: "+44" },
    { text: "+1222", value: "+1222" },
    // 可以添加更多区号选项
  ];
  // 当前选择的区号
  const areaCode = ref<string>("+86");
  const onSelect = (action: AreaCodeOption): void => {
    areaCode.value = action.text;
  };

  // 手机号
  const phone = ref<string>("");
  // 密码
  const password = ref<string>("");

  // 处理登录
  const handleLogin = (): void => {
    router.push({ path: '/' });
    // 这里可以添加登录逻辑
    console.log("手机号:", phone.value, "密码:", password.value);
  };

  const handleRegister = (): void => {
    emit('change', 'register');
  };

  return {
    showPopover,
    areaCodeOptions,
    areaCode,
    phone,
    password,
    onSelect,
    handleLogin,
    handleRegister,
  }
}


