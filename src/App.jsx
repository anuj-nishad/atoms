
import {useRecoilValue, RecoilRoot, useRecoilState} from 'recoil'
import {jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector} from './atoms'

function App() {

  return <RecoilRoot>
      <TopBar></TopBar>
    </RecoilRoot>
}

function TopBar(){

  const networkAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  function finalvalue(x){
    if(x>=100)
      return "99+";
    else
      return x;
  }
  return <div>
  <button>Home</button>

  <button>My Network ({finalvalue(networkAtomCount)})</button>
  <button>Jobs ({finalvalue(jobsAtomCount)})</button>
  <button>Messages ({finalvalue(messagingAtomCount)})</button>
  <button>Notifications ({finalvalue(notificationAtomCount)})</button>

  <button onClick={()=>setMessagingAtomCount(x=>x+1)}>Me ({totalNotificationCount})</button>
</div>
}
export default App
