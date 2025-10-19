import { HomePage } from "@/components/home/home-page";
import { getDictionary } from "@/i18n";

export default function Home() {
  const dictionary = getDictionary();

  return <HomePage dictionary={dictionary} />;
}
