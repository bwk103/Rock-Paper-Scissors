describe('Results Viewer', () => {
  var container;

  beforeEach(()=> {
    container = $("<p></p>");
  })

  describe('#addMessage', () => {
    it('adds the result message to the element', ()=> {
      var results = new ResultsViewer(container)
      results.addMessage('This is a test')
      expect(container.html()).toMatch(/This is a test/)
    })
  })

  describe('#clearMessage', () => {
    it('removes the result message from the element', () => {
      var results = new ResultsViewer(container)
      results.addMessage('This is a test')
      results.clearMessage()
      expect(container.html()).toBe("")
    })
  })
})
