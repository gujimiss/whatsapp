export function useExample() {

  const auth = useAuthStore();
  console.log("auth", auth);
  auth.setToken("123456");
  console.log("auth", auth);

  // 区号选项
  const showPopover = ref(false);
  const areaCodeOptions = [
    { text: "+86", value: "+86" },
    { text: "+1", value: "+1" },
    { text: "+44", value: "+44" },
    { text: "+1222", value: "+1222" },
    // 可以添加更多区号选项
  ];
  // 当前选择的区号
  const areaCode = ref("+86");
  const onSelect = (action: any) => (areaCode.value = action.text);

  // 手机号
  const phone = ref("");
  // 密码
  const password = ref("");

  // 处理登录
  const handleLogin = () => {
    // 这里可以添加登录逻辑
    console.log("手机号:", phone.value, "密码:", password.value);
  };

  // 处理登录
  const router = useRouter();
  const handleRegister = () => {
    router.push({ path: "/login" });
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


