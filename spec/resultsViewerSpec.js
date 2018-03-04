describe('Results Viewer', () => {
  var container;

  beforeEach(()=> {
    container = $("<p></p>");
  })

  it('adds the result message to the element', ()=> {
    var results = new ResultsViewer(container)
    results.addMessage('This is a test')
    expect(container.html()).toMatch(/This is a test/)
  })
})
