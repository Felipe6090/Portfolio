import { useEffect, useState } from "react";
import { api } from "../services/api";

type IWorks = {
  id: string;
  workName: string;
  subText: string;
  text: string;
  imgLink: string;
  itsOpenCode: boolean;
  githubLink?: string;
  itsOnline: boolean;
  workLink?: string;
  itsFavorite: boolean;
  lastChange: Date;
};

export function useWorkPage(workName: string) {
  const [isLoading, setLoading] = useState(true);
  const [work, setWork] = useState<IWorks>(null);

  useEffect(() => {
    api.get<IWorks>(`/works/${workName}`).then((res) => {
      setWork(res.data);

      setLoading(false);

      console.log(work + "  " + isLoading + "   useWorkPage Log");
    });
  }, []);

  return { work, isLoading };
}
