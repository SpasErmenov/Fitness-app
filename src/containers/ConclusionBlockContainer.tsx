import { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { ConclusionBlock } from "@/components/ConclusionBlock/ConclusionBlock";
import { AuthMode } from "@/enums/enums";
import { authStore } from "@/stores/stores";

export const ConclusionBlockContainer = observer(() => {
  const handleOnJoinNowClick = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    authStore.setAuthMode(AuthMode.Register);
  }, []);

  return <ConclusionBlock onJoinNowClick={handleOnJoinNowClick} />;
});
