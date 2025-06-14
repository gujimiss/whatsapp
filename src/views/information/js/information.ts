interface ArticleItem {
  id: number;
  title: string;
  time: string;
  category: string;
}

interface useExampleReturn {
  currentList: Ref<ArticleItem[]>;
  activeTab: Ref<string>;
  onSearch: (val: string) => void;
  changeTab: (tab: string) => void;
}

export function useExample(): useExampleReturn {

  // 搜索相关
  const onSearch = (val: string) => {
    console.log("搜索关键词：", val);
    // TODO: 实现搜索逻辑
  };

  // 示例数据
  const currentList = ref<ArticleItem[]>([]);

  const newsList = ref<ArticleItem[]>([
    { id: 1, title: "综合资讯标题1", time: "2025-05-24", category: "综合资讯" },
    { id: 2, title: "综合资讯标题2", time: "2025-05-23", category: "综合资讯" },
    { id: 3, title: "综合资讯标题3", time: "2025-05-23", category: "综合资讯" },
    { id: 4, title: "综合资讯标题4", time: "2025-05-23", category: "综合资讯" },
    { id: 5, title: "综合资讯标题5", time: "2025-05-23", category: "综合资讯" },
    { id: 6, title: "综合资讯标题6", time: "2025-05-23", category: "综合资讯" },
    { id: 7, title: "综合资讯标题7", time: "2025-05-23", category: "综合资讯" },
    { id: 8, title: "综合资讯标题8", time: "2025-05-23", category: "综合资讯" },
    { id: 9, title: "综合资讯标题9", time: "2025-05-23", category: "综合资讯" },
    { id: 10, title: "综合资讯标题10", time: "2025-05-23", category: "综合资讯" },
  ]);

  const noticeList = ref<ArticleItem[]>([{ id: 3, title: "平台公告标题1", time: "2025-05-22", category: "平台公告" }]);

  const faqList = ref<ArticleItem[]>([{ id: 4, title: "常见问题1", time: "2025-05-21", category: "常见问题" }]);

  const activeTab = ref("news");

  // 默认选中第一个标签
  currentList.value = newsList.value;
  const changeTab = (tab: string) => {
    activeTab.value = tab;
    console.log("当前选中的标签：", tab);
    if (tab == "notice") {
      currentList.value = noticeList.value;
    } else if (tab == "faq") {
      currentList.value = faqList.value;
    } else {
      currentList.value = newsList.value;
    }
  };

  return {
    currentList,
    activeTab,
    onSearch,
    changeTab
  }
}


