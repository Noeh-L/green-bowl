import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

function CasinoEffect({ count, className }) {
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

  /* MOUNTING */
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 0.5s;
  }
  .count-animated-enter-active {
  }

  /* UNMOUNTING */
  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: 0.5s;
  }
`;

export default CasinoEffect;
