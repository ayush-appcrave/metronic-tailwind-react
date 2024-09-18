import { DefaultCommunityBadges } from '../default';
import {
  NFTAbout,
  NFTAssets,
  NFTNetwork,
  NFTTokens3dArt,
  NFTTokensCollected,
  NFTTokensCreated
} from '.';

const NFTContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <NFTAssets />
          <NFTAbout />
          <DefaultCommunityBadges title="Badges" />
          <NFTNetwork />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <NFTTokensCreated />
            <NFTTokensCollected />
            <NFTTokens3dArt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default  NFTContent ;
