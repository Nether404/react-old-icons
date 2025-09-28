import React, { useState, useMemo } from 'react'
import OldIcon from './OldIcon'
import './App.css'

// Sample of popular classic icons to showcase
const SAMPLE_ICONS = [
  'Windows95Calculator',
  'Windows95Notepad',
  'Windows95Minesweeper',
  'Windows95RecycleBin',
  'Windows95MyComputer',
  'WindowsXPMyComputer',
  'WindowsXPRecycleBin',
  'WindowsXPNotepad',
  'WindowsXPCalculator',
  'WindowsXPPaint',
  'WindowsVistaCalculator',
  'WindowsVistaRecycleBin',
  'WindowsVistaNotepad',
  'InternetExplorer',
  'InternetExplorer6',
  'Netscape7',
  'Firefox5',
  'GoogleChrome',
  'Winamp',
  'WinRAR',
  'Photoshop6',
  'MicrosoftOffice97',
  'MicrosoftWord2',
  'MicrosoftExcel',
  'PowerPoint',
  'Outlook',
  'Solitaire2',
  'FreeCell2',
  'Hearts',
  'Pinball2000',
  'Doom95',
  'Quake',
  'HalfLife',
  'CounterStrike',
  'StarCraft',
  'AgeOfEmpiresII',
  'SimCity',
  'RollerCoasterTycoon',
  'TheSims',
  'GrandTheftAutoIII',
  'MaxPayne',
  'ICQ',
  'MSNMessenger',
  'Napster',
  'KaZaA',
  'RealPlayer',
  'WindowsMediaPlayer',
  'QuickTime',
  'VLCMediaPlayer'
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSize, setSelectedSize] = useState(32)

  const filteredIcons = useMemo(() => {
    return SAMPLE_ICONS.filter(icon =>
      icon.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🪟 React Old Icons</h1>
          <p>A comprehensive collection of over 2,300 classic icons from vintage operating systems and software</p>
          
          <div className="controls">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search icons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="size-container">
              <label htmlFor="size-select">Size:</label>
              <select
                id="size-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(Number(e.target.value))}
                className="size-select"
              >
                <option value={16}>16px</option>
                <option value={24}>24px</option>
                <option value={32}>32px</option>
                <option value={48}>48px</option>
                <option value={64}>64px</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="stats">
          <p>Showing {filteredIcons.length} of {SAMPLE_ICONS.length} sample icons</p>
        </div>

        <div className="icon-grid">
          {filteredIcons.map((iconName) => (
            <div key={iconName} className="icon-card">
              <div className="icon-container">
                <OldIcon 
                  name={iconName} 
                  size={selectedSize}
                  alt={iconName}
                />
              </div>
              <div className="icon-name">{iconName}</div>
              <div className="icon-code">
                <code>{`<${iconName} size={${selectedSize}} />`}</code>
              </div>
            </div>
          ))}
        </div>

        {filteredIcons.length === 0 && (
          <div className="no-results">
            <p>No icons found matching "{searchTerm}"</p>
            <p>Try searching for terms like "Windows", "Office", "Game", or "Browser"</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>
          This library preserves digital history with over 2,300 classic icons from the golden age of computing.
          <br />
          Icons are property of their respective companies and used for historical preservation.
        </p>
      </footer>
    </div>
  )
}

export default App