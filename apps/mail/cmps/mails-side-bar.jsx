export function MailsSideBar({ folder, onSetFolder, onOpenComposeBox }) {
    const inboxActiveClass = folder === 'inbox' ? 'active' : ''
    const starredActiveClass = folder === 'starred' ? 'active' : ''
    const sentActiveClass = folder === 'sent' ? 'active' : ''
    const trashActiveClass = folder === 'trash' ? 'active' : ''
    const draftsActiveClass = folder === 'drafts' ? 'active' : ''

    return <section className="side-bar">
        <div className="compose-container" onClick={() => onOpenComposeBox(true)}>
            <span>+</span>
            <span>Compose</span>
        </div>
        <div className="folders-container">
            <div className={`folder inbox-folder ${inboxActiveClass}`} onClick={() => onSetFolder('inbox')}>
                <img src="apps/mail/assets/img/inbox-icon.png" className="side-img" />
                <span className="content inbox-content">
                    <span className={`content inbox-content ${inboxActiveClass}`}>Inbox</span>
                    <span className={`content inbox-content amount ${inboxActiveClass}`}>555</span>
                </span>
            </div>
            <div className={`folder ${starredActiveClass}`} onClick={() => onSetFolder('starred')}>
                <img src="apps/mail/assets/img/starred-icon.png" className="side-img" />
                <span className="content">Starred</span>
            </div>
            <div className={`folder ${sentActiveClass}`} onClick={() => onSetFolder('sent')}>
                <img src="apps/mail/assets/img/sent-icon.png" className="side-img" />
                <span className="content">Sent</span>
            </div>
            <div className={`folder ${trashActiveClass}`} onClick={() => onSetFolder('trash')}>
                <img src="apps/mail/assets/img/delete-icon.png" className="side-img" />
                <span className="content">Trash</span>
            </div>
            <div className={`folder ${draftsActiveClass}`} onClick={() => onSetFolder('drafts')}>
                <img src="apps/mail/assets/img/drafts-icon.png" className="side-img" />
                <span className="content">Drafts</span>
            </div>
        </div>
    </section>
}