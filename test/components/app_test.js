import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
import TrainList from '../../src/components/train_list';
import TrainHeader from '../../src/components/train_header';
describe('App Component' , () => {
  let app, trainHeader, trainList;

  beforeEach(() => {
    app = renderComponent(App);
    trainHeader = renderComponent(TrainHeader);
    trainList = renderComponent(TrainList);
  });

  it('App can be rendered', () => {
    expect(app).to.exist;
  });

  describe('App renders child components', () => {
    beforeEach(() => {

    });
    it('Header can be rendered', () => {
      expect(trainHeader).to.exist;
    });
    it('TrainList can be rendered', () => {
      expect(trainList).to.exist;
    });

  });

  it('should contain a header', () => {
    expect(app.find('.train-header')).to.exist;
  });

  it('should contain a train list', () => {
    expect(app.find('.train-list')).to.exist;
  });

});
