import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import axios from "axios";

interface INewsProviderProps {
  children: ReactNode;
}

interface INewsDataSource {
  id: null | string;
  name: string;
}

interface INewsDataState {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: INewsDataSource;
  title: string;
  url: string;
  urlToImage: string;
}

interface INewsContextData {
  loadNews: () => Promise<void>;
  newsData: INewsDataState[];
}

const NewsContext = createContext<INewsContextData>({} as INewsContextData);

const useNews = () => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }

  return context;
};

const NewsProvider = ({ children }: INewsProviderProps) => {
  const [newsData, setNewsData] = useState<INewsDataState[]>([]);

  const loadNews = useCallback(async () => {
    const searchQuery = [
      "brasil chuva enchente",
      "brasil mineração desastre",
      "brasil barragem",
    ];
    const apiKey = "1669ca52172c438ba793576de9565f61";

    await axios
      .get(
        `https://newsapi.org/v2/everything?q=${
          searchQuery[Math.floor(Math.random() * searchQuery.length)]
        }&apiKey=${apiKey}`
      )
      .then((response) => {
        console.log(response);

        const data = response.data.articles as INewsDataState[];

        const filteredData = data.filter(
          ({ title, urlToImage, description }) =>
            title !== null && urlToImage !== null && description !== null
        );

        setNewsData(filteredData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ loadNews, newsData }}>
      {children}
    </NewsContext.Provider>
  );
};

export { useNews, NewsProvider };
