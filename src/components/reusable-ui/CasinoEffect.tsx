import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { casinoEffectAnimation } from "@/theme/animation";

type CasinoEffectProps = {
  count: string;
  className?: string;
};

function CasinoEffect({ count, className }: CasinoEffectProps) {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition classNames={"count-animated"} timeout={2000} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  overflow-y: hidden;
  position: relative;

  span {
    display: inline-block;
  }

  ${casinoEffectAnimation}
`;

export default CasinoEffect;
