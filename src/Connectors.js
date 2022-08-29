import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

export const injected = new InjectedConnector();

function Wallet() {
  const { account, active, activate } = useWeb3React();
  // connector: 현재 dapp에 연결된 지갑의 connector 값
  // *library: web3 provider 제공
  // chainId: dapp에 연결된 account의 chainId
  // account: dapp에 연결된 지갑 주소
  // active: dapp 유저가 로그인 상태
  // activate: dapp 월렛 연결 기능 함수
  // deactivate: dapp 월렛 연결 해제 함수
  const connectWallet = async () => {
    try {
      await activate(injected, (error) => {
        // 크롬 익스텐션 없을 경우 오류 핸들링
        if ("/No Ethereum provider was found on window.ethereum/") throw new Error("Metamask 익스텐션을 설치해주세요");
      });
    } catch (err) {
      alert(err);
      window.open("https://metamask.io/download.html");
    }
  };
  return (
    <div>
      {active ? (
        <>
          <h2>My Wallets</h2>
          <h>{account}</h>
        </>
      ) : (
        <button onClick={connectWallet}>연결</button>
      )}
    </div>
  );
}

export default Wallet;
