import { format } from '~/utils/datetime';

describe('datetime.ts', () => {
  it('should return formatted datetime.', () => {
    expect(format('2019-12-28T10:00:00Z')).toEqual('2019/12/28');
  });
});
