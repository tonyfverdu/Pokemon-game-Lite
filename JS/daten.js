///////////////////////////////////////////////////////////////////////////
//                      GENERALL DATA AND VARIABLES                      //

var emoji = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '☺', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄', 
'😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '🤓', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹', '🙁', '😖', '😞', '😟', 
'😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '😵', '😡', '😠', '😇', '🤠', '🤡', '🤥', '😷', '🤒', '🤕', '🤢', '🤧', '😈', '👿', '👹', '👺', 
'💀', '☠', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊', '👦', '👦🏻', '👦🏼', '👦🏽', '👦🏾', '👦🏿', '👧', '👧🏻', 
'👧🏼', '👧🏽', '👧🏾', '👧🏿', '👨', '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿', '👩', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿', '👴', '👴🏻', '👴🏼', '👴🏽', '👴🏾', '👴🏿', '👵', '👵🏻', '👵🏼', '👵🏽', '👵🏾', 
'👵🏿', '👶', '👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿', '👼', '👼🏻', '👼🏼', '👼🏽', '👼🏾', '👼🏿', '👮', '👮🏻', '👮🏼', '👮🏽', '👮🏾', '👮🏿', '🕵', '🕵🏻', '🕵🏼', '🕵🏽', '🕵🏾', '🕵🏿', '💂', '💂🏻', 
'💂🏼', '💂🏽', '💂🏾', '💂🏿', '👷', '👷🏻', '👷🏼', '👷🏽', '👷🏾', '👷🏿', '👳', '👳🏻', '👳🏼', '👳🏽', '👳🏾', '👳🏿', '👱', '👱🏻', '👱🏼', '👱🏽', '👱🏾', '👱🏿', '🎅', '🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', 
'🎅🏿', '🤶', '🤶🏻', '🤶🏼', '🤶🏽', '🤶🏾', '🤶🏿', '👸', '👸🏻', '👸🏼', '👸🏽', '👸🏾', '👸🏿', '🤴', '🤴🏻', '🤴🏼', '🤴🏽', '🤴🏾', '🤴🏿', '👰', '👰🏻', '👰🏼', '👰🏽', '👰🏾', '👰🏿', '🤵', '🤵🏻', 
'🤵🏼', '🤵🏽', '🤵🏾', '🤵🏿', '🤰', '🤰🏻', '🤰🏼', '🤰🏽', '🤰🏾', '🤰🏿', '👲', '👲🏻', '👲🏼', '👲🏽', '👲🏾', '👲🏿', '🙍', '🙍🏻', '🙍🏼', '🙍🏽', '🙍🏾', '🙍🏿', '🙎', '🙎🏻', '🙎🏼', '🙎🏽', '🙎🏾', 
'🙎🏿', '🙅', '🙅🏻', '🙅🏼', '🙅🏽', '🙅🏾', '🙅🏿', '🙆', '🙆🏻', '🙆🏼', '🙆🏽', '🙆🏾', '🙆🏿', '💁', '💁🏻', '💁🏼', '💁🏽', '💁🏾', '💁🏿', '🙋', '🙋🏻', '🙋🏼', '🙋🏽', '🙋🏾', '🙋🏿', '🙇', '🙇🏻', 
'🙇🏼', '🙇🏽', '🙇🏾', '🙇🏿', '🤦', '🤦🏻', '🤦🏼', '🤦🏽', '🤦🏾', '🤦🏿', '🤷', '🤷🏻', '🤷🏼', '🤷🏽', '🤷🏾', '🤷🏿', '💆', '💆🏻', '💆🏼', '💆🏽', '💆🏾', '💆🏿', '💇', '💇🏻', '💇🏼', '💇🏽', '💇🏾', 
'💇🏿', '🚶', '🚶🏻', '🚶🏼', '🚶🏽', '🚶🏾', '🚶🏿', '🏃', '🏃🏻', '🏃🏼', '🏃🏽', '🏃🏾', '🏃🏿', '💃', '💃🏻', '💃🏼', '💃🏽', '💃🏾', '💃🏿', '🕺', '🕺🏻', '🕺🏼', '🕺🏽', '🕺🏾', '🕺🏿', '👯', '🕴', 
'🗣', '👤', '👥', '🤺', '🏇', '⛷', '🏂', '🏌', '🏄', '🏄🏻', '🏄🏼', '🏄🏽', '🏄🏾', '🏄🏿', '🚣', '🚣🏻', '🚣🏼', '🚣🏽', '🚣🏾', '🚣🏿', '🏊', '🏊🏻', '🏊🏼', '🏊🏽', '🏊🏾', '🏊🏿', '⛹', 
'⛹🏻', '⛹🏼', '⛹🏽', '⛹🏾', '⛹🏿', '🏋', '🏋🏻', '🏋🏼', '🏋🏽', '🏋🏾', '🏋🏿', '🚴', '🚴🏻', '🚴🏼', '🚴🏽', '🚴🏾', '🚴🏿', '🚵', '🚵🏻', '🚵🏼', '🚵🏽', '🚵🏾', '🚵🏿', '🏎', '🏍', '🤸', '🤸🏻', 
'🤸🏼', '🤸🏽', '🤸🏾', '🤸🏿', '🤼', '🤼🏻', '🤼🏼', '🤼🏽', '🤼🏾', '🤼🏿', '🤽', '🤽🏻', '🤽🏼', '🤽🏽', '🤽🏾', '🤽🏿', '🤾', '🤾🏻', '🤾🏼', '🤾🏽', '🤾🏾', '🤾🏿', '🤹', '🤹🏻', '🤹🏼', '🤹🏽', '🤹🏾', 
'🤹🏿', '👫', '👬', '👭', '💏', '👩‍❤️‍💋‍👨', '👨‍❤️‍💋‍👨', '👩‍❤️‍💋‍👩', '💑', '👩‍❤️‍👨', '👨‍❤️‍👨', '👩‍❤️‍👩', '👪', '👨‍👩‍👦', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', 
'👩‍👩‍👧‍👧', '🏻', '🏼', '🏽', '🏾', '🏿', '💪', '💪🏻', '💪🏼', '💪🏽', '💪🏾', '💪🏿', '🤳', '🤳🏻', '🤳🏼', '🤳🏽', '🤳🏾', '🤳🏿', '👈', '👈🏻', '👈🏼', '👈🏽', '👈🏾', '👈🏿', '👉', '👉🏻', '👉🏼', '👉🏽', 
'👉🏾', '👉🏿', '☝', '☝🏻', '☝🏼', '☝🏽', '☝🏾', '☝🏿', '👆', '👆🏻', '👆🏼', '👆🏽', '👆🏾', '👆🏿', '🖕', '🖕🏻', '🖕🏼', '🖕🏽', '🖕🏾', '🖕🏿', '👇', '👇🏻', '👇🏼', '👇🏽', '👇🏾', '👇🏿', '✌', '✌🏻', 
'✌🏼', '✌🏽', '✌🏾', '✌🏿', '🤞', '🤞🏻', '🤞🏼', '🤞🏽', '🤞🏾', '🤞🏿', '🖖', '🖖🏻', '🖖🏼', '🖖🏽', '🖖🏾', '🖖🏿', '🤘', '🤘🏻', '🤘🏼', '🤘🏽', '🤘🏾', '🤘🏿', '🤙', '🤙🏻', '🤙🏼', '🤙🏽', '🤙🏾', 
'🤙🏿', '🖐', '🖐🏻', '🖐🏼', '🖐🏽', '🖐🏾', '🖐🏿', '✋', '✋🏻', '✋🏼', '✋🏽', '✋🏾', '✋🏿', '👌', '👌🏻', '👌🏼', '👌🏽', '👌🏾', '👌🏿', '👍', '👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿', '👎', '👎🏻', 
'👎🏼', '👎🏽', '👎🏾', '👎🏿', '✊', '✊🏻', '✊🏼', '✊🏽', '✊🏾', '✊🏿', '👊', '👊🏻', '👊🏼', '👊🏽', '👊🏾', '👊🏿', '🤛', '🤛🏻', '🤛🏼', '🤛🏽', '🤛🏾', '🤛🏿', '🤜', '🤜🏻', '🤜🏼', '🤜🏽', '🤜🏾', 
'🤜🏿', '🤚', '🤚🏻', '🤚🏼', '🤚🏽', '🤚🏾', '🤚🏿', '👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿', '👏', '👏🏻', '👏🏼', '👏🏽', '👏🏾', '👏🏿', '✍', '✍🏻', '✍🏼', '✍🏽', '✍🏾', '✍🏿', '👐', '👐🏻', 
'👐🏼', '👐🏽', '👐🏾', '👐🏿', '🙌', '🙌🏻', '🙌🏼', '🙌🏽', '🙌🏾', '🙌🏿', '🙏', '🙏🏻', '🙏🏼', '🙏🏽', '🙏🏾', '🙏🏿', '🤝', '🤝🏻', '🤝🏼', '🤝🏽', '🤝🏾', '🤝🏿', '💅', '💅🏻', '💅🏼', '💅🏽', '💅🏾', 
'💅🏿', '👂', '👂🏻', '👂🏼', '👂🏽', '👂🏾', '👂🏿', '👃', '👃🏻', '👃🏼', '👃🏽', '👃🏾', '👃🏿', '👣', '👀', '👁', '👁‍🗨', '👅', '👄', '💋', '💘', '❤', '💓', '💔', '💕', '💖', '💗', 
'💙', '💚', '💛', '💜', '🖤', '💝', '💞', '💟', '❣', '💌', '💤', '💢', '💣', '💥', '💦', '💨', '💫', '💬', '🗨', '🗯', '💭', '🕳', '👓', '🕶', '👔', '👕', '👖', 
'👗', '👘', '👙', '👚', '👛', '👜', '👝', '🛍', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '⛑', '📿', '💄', '💍', '💎', '🐵', '🐒', '🦍', '🐶', 
'🐕', '🐩', '🐺', '🦊', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆', '🐴', '🐎', '🦌', '🦄', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐗', '🐽', '🐏', '🐑', '🐐', '🐪', '🐫', 
'🐘', '🦏', '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿', '🦇', '🐻', '🐨', '🐼', '🐾', '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊', '🦅', '🦆', '🦉', '🐸', 
'🐊', '🐢', '🦎', '🐍', '🐲', '🐉', '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🦀', '🦐', '🦑', '🦋', '🐌', '🐛', '🐜', '🐝', '🐞', '🕷', '🕸', '🦂', 
'💐', '🌸', '💮', '🏵', '🌹', '🥀', '🌺', '🌻', '🌼', '🌷', '🌱', '🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '☘', '🍀', '🍁', '🍂', '🍃', '🍇', '🍈', '🍉', '🍊', '🍋', 
'🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶', '🥒', '🍄', '🥜', '🌰', '🍞', '🥐', '🥖', '🥞', '🧀', '🍖', '🍗', 
'🥓', '🍔', '🍟', '🍕', '🌭', '🌮', '🌯', '🥙', '🥚', '🍳', '🥘', '🍲', '🥗', '🍿', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🍡', 
'🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🍫', '🍬', '🍭', '🍮', '🍯', '🍼', '🥛', '☕', '🍵', '🍶', '🍾', '🍷', '🍸', '🍹', '🍺', '🍻', '🥂', '🥃', '🍽', '🍴', 
'🥄', '🔪', '🏺', '🌍', '🌎', '🌏', '🌐', '🗺', '🗾', '🏔', '⛰', '🌋', '🗻', '🏕', '🏖', '🏜', '🏝', '🏞', '🏟', '🏛', '🏗', '🏘', '🏙', '🏚', '🏠', '🏡', '🏢', 
'🏣', '🏤', '🏥', '🏦', '🏨', '🏩', '🏪', '🏫', '🏬', '🏭', '🏯', '🏰', '💒', '🗼', '🗽', '⛪', '🕌', '🕍', '⛩', '🕋', '⛲', '⛺', '🌁', '🌃', '🌄', '🌅', '🌆', 
'🌇', '🌉', '♨', '🌌', '🎠', '🎡', '🎢', '💈', '🎪', '🎭', '🖼', '🎨', '🎰', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚌', '🚍', 
'🚎', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚲', '🛴', '🛵', '🚏', '🛣', '🛤', '⛽', '🚨', '🚥', '🚦', '🚧', '🛑', '⚓', 
'⛵', '🛶', '🚤', '🛳', '⛴', '🛥', '🚢', '✈', '🛩', '🛫', '🛬', '💺', '🚁', '🚟', '🚠', '🚡', '🚀', '🛰', '🛎', '🚪', '🛌', '🛏', '🛋', '🚽', '🚿', '🛀', '🛀🏻', 
'🛀🏼', '🛀🏽', '🛀🏾', '🛀🏿', '🛁', '⌛', '⏳', '⌚', '⏰', '⏱', '⏲', '🕰', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕡', '🕖', 
'🕢', '🕗', '🕣', '🕘', '🕤', '🕙', '🕥', '🕚', '🕦', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌙', '🌚', '🌛', '🌜', '🌡', '☀', '🌝', '🌞', '⭐', '🌟', 
'🌠', '☁', '⛅', '⛈', '🌤', '🌥', '🌦', '🌧', '🌨', '🌩', '🌪', '🌫', '🌬', '🌀', '🌈', '🌂', '☂', '☔', '⛱', '⚡', '❄', '☃', '⛄', '☄', '🔥', '💧', '🌊', '🎃', 
'🎄', '🎆', '🎇', '✨', '🎈', '🎉', '🎊', '🎋', '🎍', '🎎', '🎏', '🎐', '🎑', '🎀', '🎁', '🎗', '🎟', '🎫', '🎖', '🏆', '🏅', '🥇', '🥈', '🥉', '⚽', '⚾', '🏀', 
'🏐', '🏈', '🏉', '🎾', '🎱', '🎳', '🏏', '🏑', '🏒', '🏓', '🏸', '🥊', '🥋', '🥅', '🎯', '⛳', '⛸', '🎣', '🎽', '🎿', '🎮', '🕹', '🎲', '♠', '♥', '♦', '♣', '🃏', 
'🀄', '🎴', '🔇', '🔈', '🔉', '🔊', '📢', '📣', '📯', '🔔', '🔕', '🎼', '🎵', '🎶', '🎙', '🎚', '🎛', '🎤', '🎧', '📻', '🎷', '🎸', '🎹', '🎺', '🎻', '🥁', '📱', 
'📲', '☎', '📞', '📟', '📠', '🔋', '🔌', '💻', '🖥', '🖨', '⌨', '🖱', '🖲', '💽', '💾', '💿', '📀', '🎥', '🎞', '📽', '🎬', '📺', '📷', '📸', '📹', '📼', '🔍', '🔎', 
'🔬', '🔭', '📡', '🕯', '💡', '🔦', '🏮', '📔', '📕', '📖', '📗', '📘', '📙', '📚', '📓', '📒', '📃', '📜', '📄', '📰', '🗞', '📑', '🔖', '🏷', '💰', '💴', '💵', 
'💶', '💷', '💸', '💳', '💹', '💱', '💲', '✉', '📧', '📨', '📩', '📤', '📥', '📦', '📫', '📪', '📬', '📭', '📮', '🗳', '✏', '✒', '🖋', '🖊', '🖌', '🖍', '📝', '💼', 
'📁', '📂', '🗂', '📅', '📆', '🗒', '🗓', '📇', '📈', '📉', '📊', '📋', '📌', '📍', '📎', '🖇', '📏', '📐', '✂', '🗃', '🗄', '🗑', '🔒', '🔓', '🔏', '🔐', '🔑', 
'🗝', '🔨', '⛏', '⚒', '🛠', '🗡', '⚔', '🔫', '🏹', '🛡', '🔧', '🔩', '⚙', '🗜', '⚗', '⚖', '🔗', '⛓', '💉', '💊', '🚬', '⚰', '⚱', '🗿', '🛢', '🔮', '🛒', '🏧', 
'🚮', '🚰', '♿', '🚹', '🚺', '🚻', '🚼', '🚾', '🛂', '🛃', '🛄', '🛅', '⚠', '🚸', '⛔', '🚫', '🚳', '🚭', '🚯', '🚱', '🚷', '📵', '🔞', '☢', '☣', '⬆', '↗', '➡', 
'↘', '⬇', '↙', '⬅', '↖', '↕', '↔', '↩', '↪', '⤴', '⤵', '🔃', '🔄', '🔙', '🔚', '🔛', '🔜', '🔝', '🛐', '⚛', '🕉', '✡', '☸', '☯', '✝', '☦', '☪', '☮', '🕎', '🔯', 
'♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔀', '🔁', '🔂', '▶', '⏩', '⏭', '⏯', '◀', '⏪', '⏮', '🔼', '⏫', '🔽', '⏬', '⏸', '⏹', '⏺', 
'⏏', '🎦', '🔅', '🔆', '📶', '📳', '📴', '♻', '📛', '⚜', '🔰', '🔱', '⭕', '✅', '☑', '✔', '✖', '❌', '❎', '➕', '➖', '➗', '➰', '➿', '〽', '✳', '✴', '❇', '‼', 
'⁉', '❓', '❔', '❕', '❗', '〰', '©', '®', '™', '#️⃣', '*️⃣', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '💯', '🔠', '🔡', '🔢', '🔣', '🔤', 
'🅰', '🆎', '🅱', '🆑', '🆒', '🆓', 'ℹ', '🆔', 'Ⓜ', '🆕', '🆖', '🅾', '🆗', '🅿', '🆘', '🆙', '🆚', '🈁', '🈂', '🈷', '🈶', '🈯', '🉐', '🈹', '🈚', '🈲', '🉑', '🈸', 
'🈴', '🈳', '㊗', '㊙', '🈺', '🈵', '▪', '▫', '◻', '◼', '◽', '◾', '⬛', '⬜', '🔶', '🔷', '🔸', '🔹', '🔺', '🔻', '💠', '🔘', '🔲', '🔳', '⚪', '⚫', '🔴', '🔵', 
'🏁', '🚩', '🎌', '🏴', '🏳', '🇦🇨', '🇦🇩', '🇦🇪', '🇦🇫', '🇦🇬', '🇦🇮', '🇦🇱', '🇦🇲', '🇦🇴', '🇦🇶', '🇦🇷', '🇦🇸', '🇦🇹', '🇦🇺', '🇦🇼', '🇦🇽', '🇦🇿', '🇧🇦', '🇧🇧', '🇧🇩', '🇧🇪', '🇧🇫', 
'🇧🇬', '🇧🇭', '🇧🇮', '🇧🇯', '🇧🇱', '🇧🇲', '🇧🇳', '🇧🇴', '🇧🇶', '🇧🇷', '🇧🇸', '🇧🇹', '🇧🇻', '🇧🇼', '🇧🇾', '🇧🇿', '🇨🇦', '🇨🇨', '🇨🇩', '🇨🇫', '🇨🇬', '🇨🇭', '🇨🇮', '🇨🇰', '🇨🇱', '🇨🇲', '🇨🇳', 
'🇨🇴', '🇨🇵', '🇨🇷', '🇨🇺', '🇨🇻', '🇨🇼', '🇨🇽', '🇨🇾', '🇨🇿', '🇩🇪', '🇩🇬', '🇩🇯', '🇩🇰', '🇩🇲', '🇩🇴', '🇩🇿', '🇪🇦', '🇪🇨', '🇪🇪', '🇪🇬', '🇪🇭', '🇪🇷', '🇪🇸', '🇪🇹', '🇪🇺', '🇫🇮', '🇫🇯', 
'🇫🇰', '🇫🇲', '🇫🇴', '🇫🇷', '🇬🇦', '🇬🇧', '🇬🇩', '🇬🇪', '🇬🇫', '🇬🇬', '🇬🇭', '🇬🇮', '🇬🇱', '🇬🇲', '🇬🇳', '🇬🇵', '🇬🇶', '🇬🇷', '🇬🇸', '🇬🇹', '🇬🇺', '🇬🇼', '🇬🇾', '🇭🇰', '🇭🇲', '🇭🇳', '🇭🇷', 
'🇭🇹', '🇭🇺', '🇮🇨', '🇮🇩', '🇮🇪', '🇮🇱', '🇮🇲', '🇮🇳', '🇮🇴', '🇮🇶', '🇮🇷', '🇮🇸', '🇮🇹', '🇯🇪', '🇯🇲', '🇯🇴', '🇯🇵', '🇰🇪', '🇰🇬', '🇰🇭', '🇰🇮', '🇰🇲', '🇰🇳', '🇰🇵', '🇰🇷', '🇰🇼', '🇰🇾', 
'🇰🇿', '🇱🇦', '🇱🇧', '🇱🇨', '🇱🇮', '🇱🇰', '🇱🇷', '🇱🇸', '🇱🇹', '🇱🇺', '🇱🇻', '🇱🇾', '🇲🇦', '🇲🇨', '🇲🇩', '🇲🇪', '🇲🇫', '🇲🇬', '🇲🇭', '🇲🇰', '🇲🇱', '🇲🇲', '🇲🇳', '🇲🇴', '🇲🇵', '🇲🇶', '🇲🇷', 
'🇲🇸', '🇲🇹', '🇲🇺', '🇲🇻', '🇲🇼', '🇲🇽', '🇲🇾', '🇲🇿', '🇳🇦', '🇳🇨', '🇳🇪', '🇳🇫', '🇳🇬', '🇳🇮', '🇳🇱', '🇳🇴', '🇳🇵', '🇳🇷', '🇳🇺', '🇳🇿', '🇴🇲', '🇵🇦', '🇵🇪', '🇵🇫', '🇵🇬', '🇵🇭', '🇵🇰', 
'🇵🇱', '🇵🇲', '🇵🇳', '🇵🇷', '🇵🇸', '🇵🇹', '🇵🇼', '🇵🇾', '🇶🇦', '🇷🇪', '🇷🇴', '🇷🇸', '🇷🇺', '🇷🇼', '🇸🇦', '🇸🇧', '🇸🇨', '🇸🇩', '🇸🇪', '🇸🇬', '🇸🇭', '🇸🇮', '🇸🇯', '🇸🇰', '🇸🇱', '🇸🇲', '🇸🇳', 
'🇸🇴', '🇸🇷', '🇸🇸', '🇸🇹', '🇸🇻', '🇸🇽', '🇸🇾', '🇸🇿', '🇹🇦', '🇹🇨', '🇹🇩', '🇹🇫', '🇹🇬', '🇹🇭', '🇹🇯', '🇹🇰', '🇹🇱', '🇹🇲', '🇹🇳', '🇹🇴', '🇹🇷', '🇹🇹', '🇹🇻', '🇹🇼', '🇹🇿', '🇺🇦', '🇺🇬', 
'🇺🇲', '🇺🇸', '🇺🇾', '🇺🇿', '🇻🇦', '🇻🇨', '🇻🇪', '🇻🇬', '🇻🇮', '🇻🇳', '🇻🇺', '🇼🇫', '🇼🇸', '🇽🇰', '🇾🇪', '🇾🇹', '🇿🇦', '🇿🇲', '🇿🇼'];


//  1.-  USER OF POKEMONS
const userFirstName    = [ 'Alexander', 'Anna', 'Berta', 'Bertram', 'Charlotte', 'Cassian', 'Edwin', 'Elies', 'Fridda', 'Gretel', 'Georgina', 'Hannah',
'Ferdinand', 'Florian', 'Harold', 'Hendrik', 'Heidi', 'Ian', 'Ida', 'Manal', 'Maximilian', 'Murat', 'Nicole', 'Rainer', 'Robert' ,
'Ralf', 'Sascha', 'Simon', 'Viktor', 'Walter', 'Wolf', 'Stefan', 'Sven', 'Tadeus', 'Tania', 'Vanessa', 'Veronika', 'Úrsula'  ];

const userLastName     = [ 'Albrecht','Bauer' ,'Becker', 'Braun', 'Berger','Böhm','Brandt','Braun','Dietrich','Engel','Fischer','Frank','Friedrich','Graf',
'Gross','Günther','Haas', 'Hartmann','Hoffmann','Huber','Jäger','Jung','Klein','Keller','Koch','Köhler','Krämer','Lehmann','Lorenz',
'Meyer','Maier','Möller','Müller','Neumann','Otto','Pfeiffer','Richter','Roth','Sauer','Schäfer','Schmidt','Schneider','Scholz',
'Schröder','Schubert','Schulz','Schwarz','Vogel','Wagner','Walter','Weber','Wolf','Ziegler','Zimmermann' ];

const experiencieArray  = [ ['novice', 1], ['very poor', 2], ['poor', 3], ['more or less', 4], ['some experience',5], ['has some experience', 6], ['quite experienced', 7],
['very experienced', 8], ['too much experiencie', 9], ['is a master', 10]];

const usersPokemons = [];                               //  <==||   Array of the users Pokemon in the game.


//  2.-  POKEMONS

//  Array type of Pokemon with relative value.
const typePokemons = [ ['Bug', 2], ['Earth', 1], ['Electric', 4], ['Fight', 2], ['Fire', 3], ['Flying', 2], ['Ice', 2] ['Normal', 1],
['Plant', 2], ['Poison', 3], ['Psychic', 4], ['Rock', 2], ['Water', 2] ];

//  2.1.-  Data-Array of Objects-Pokemons:
const arrayGenerallOfPokemons = [ 
    {   
        imagePokemon    : '',
        idPokemon       : 1, 
        namePokemon     : 'Bulbasaur',
        acquisitioValue : 90, 
        level           : 0,
        type            : ['Plant', 'Poison'],
        weakness        : ['Fire', 'Psychic', 'Flying', 'Ice'],
        evolution       : ['Ivysaur', 'Venusaur']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 4, 
        namePokemon     : 'Charmander',
        acquisitioValue : 167, 
        level           : 0,
        type            : ['Fire'],
        weakness        : ['Water', 'Earth', 'Rock'],
        evolution       : ['Charmeleon', 'Charizard']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 7, 
        namePokemon     : 'Squirtle',
        acquisitioValue : 190, 
        level           : 0,
        type            : ['Water'],
        weakness        : ['Plant', 'Electric'],
        evolution       : ['Wartortle', 'Blastoise']
    },
    {   
        imagePokemon    : '>(8☉)@@@oo<>',
        idPokemon       : 10, 
        namePokemon     : 'Caterpie', 
        acquisitioValue : 110, 
        level           : 0,
        type            : ['Bug'],
        weakness        : ['Fire', 'Flying', 'Rock'],
        evolution       : ['Metapod', 'Butterfree']
    },
    {   
        imagePokemon    : '<(:o)OOOooo>',
        idPokemon       : 13, 
        namePokemon     : 'Weedle',
        acquisitioValue : 140, 
        level           : 0,
        type            : ['Bug', 'Poison'],
        weakness        : ['Fire', 'Psychic', 'Flying','Rock'],
        evolution       : ['Kakuna', 'Beedrill'],
    },
    {   
        imagePokemon    : '',
        idPokemon       : 16, 
        namePokemon     : 'Pidgey',
        acquisitioValue : 95, 
        level           : 0,
        type            : ['Normal', 'Flying'],
        weakness        : ['Electric', 'Ice', 'Rock'],
        evolution       : ['Pidgeotto', 'Pidgeot']
    },
    {   
        imagePokemon    : '<|:3( )~@',
        idPokemon       : 19, 
        namePokemon     : 'Rattata',
        acquisitioValue : 80, 
        level           : 0,
        type            : ['Normal'],
        weakness        : ['Fight'],
        evolution       : ['Raticate']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 21, 
        namePokemon     : 'Spearow',
        acquisitioValue : 150, 
        level           : 0,
        type            : ['Normal', 'Flying'],
        weakness        : ['Electric', 'Ice', 'Rock'],
        evolution       : ['Fearow']
    },
    {   
        imagePokemon    : '',
        idPokemon       : 23, 
        namePokemon     : 'Ekans',
        acquisitioValue : 120, 
        level           : 0,
        type            : ['Poison'],
        weakness        : ['Psychic', 'Earth'],
        evolution       : ['Fearow', 'Arbok'],
    },
    {   
        imagePokemon    : 'ϞϞ(๑⚈ ․̫ ⚈๑)∩',
        idPokemon       : 25, 
        namePokemon     : 'Pikachu',
        acquisitioValue : 500, 
        level           : 1,
        type            : ['Electric'],
        weakness        : ['Earth'],
        evolution       : ['Raichu'],
    }
                                ];

const arrayOfAvaibleRandomPokemons = [];


//  3.-  ATTACKS

const arrayGenerallOfAttacks = [ {                                      //  -->> Attack object intro Array of attack object (all available attacks)
    idAttack            :   1,
    nameAttack          :   'Wing Steel',
    acquiValueAttack    :   35,
    forTypePokemon      :   ['Bug', 'Flying'],
    IniDamage           :   35,
    amountMagic         :   10      
},
{
    idAttack            :   2,
    nameAttack          :   'Iron Tail',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Earth', 'Plant', 'Rock'],
    IniDamage           :   15,
    amountMagic         :    6      
},
{
    idAttack            :   3,
    nameAttack          :   'Counterattack',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Electric','Fight','Normal'],
    IniDamage           :   20,
    amountMagic         :    9      
},
{
    idAttack            :   4,
    nameAttack          :   'Brutal Claw',
    acquiValueAttack    :   28,
    forTypePokemon      :   ['Earth','Fight','Rock'],
    IniDamage           :   28,
    amountMagic         :   15      
},
{
    idAttack            :   5,
    nameAttack          :   'Ice Fang',
    acquiValueAttack    :   25,
    forTypePokemon      :   ['Ice'],
    IniDamage           :   25,
    amountMagic         :   18      
},
{
    idAttack            :   6,
    nameAttack          :   'Charm',
    acquiValueAttack    :   22,
    forTypePokemon      :   ['Psychic'],
    IniDamage           :   22,
    amountMagic         :   14      
},
{
    idAttack            :   7,
    nameAttack          :   'Karate Punch',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Fight'],
    IniDamage           :   18,
    amountMagic         :   10      
},
{
    idAttack            :   8,
    nameAttack          :   'Magical Leaf Fast',
    acquiValueAttack    :   16,
    forTypePokemon      :   ['Plant','Psychic'],
    IniDamage           :   16,
    amountMagic         :    7      
},
{
    idAttack            :   9,
    nameAttack          :   'Perforator',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Earth','Rock'],
    IniDamage           :   15,
    amountMagic         :    7      
},
{
    idAttack            :   10,
    nameAttack          :   'Thundershock',
    acquiValueAttack    :   25,
    forTypePokemon      :   ['Electric', 'Fight','Water'],
    IniDamage           :   25,
    amountMagic         :   16      
},
{
    idAttack            :   11,
    nameAttack          :   'Bubble',
    acquiValueAttack    :   10,
    forTypePokemon      :   ['Bug','Water'],
    IniDamage           :   10,
    amountMagic         :    4      
},
{
    idAttack            :   12,
    nameAttack          :   'Zen Headbutt',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Earth', 'Plant', 'Water'],
    IniDamage           :   18,
    amountMagic         :   10      
},
{
    idAttack            :   13,
    nameAttack          :   'Icy Singing',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Bug', 'Plant', 'Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    idAttack            :   14,
    nameAttack          :   'Paranormal',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Bug', 'Poison', 'Psychic'],
    IniDamage           :   20,
    amountMagic         :   13      
},
{
    idAttack            :   15,
    nameAttack          :   'Spin Fire',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Electric', 'Fight', 'Fire'],
    IniDamage           :   15,
    amountMagic         :   7      
},
{
    idAttack            :   16,
    nameAttack          :   'Antiaircraft',
    acquiValueAttack    :   16,
    forTypePokemon      :   ['Earth',  'Ice', 'Normal', 'Rock', 'Water'],
    IniDamage           :   16,
    amountMagic         :    8      
},
{
    idAttack            :   17,
    nameAttack          :   'Icy Singing',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Bug', 'Plant', 'Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    idAttack            :   18,
    nameAttack          :   'Paranormal',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Bug', 'Poison', 'Psychic'],
    IniDamage           :   20,
    amountMagic         :   13      
},
{
    idAttack            :   19,
    nameAttack          :   'Spin Fire',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Electric', 'Fight', 'Fire'],
    IniDamage           :   15,
    amountMagic         :   7      
},
{
    idAttack            :   20,
    nameAttack          :   'Antiaircraft',
    acquiValueAttack    :   16,
    forTypePokemon      :   ['Earth',  'Ice', 'Normal', 'Rock', 'Water'],
    IniDamage           :   16,
    amountMagic         :    8      
},
{
    idAttack            :   21,
    nameAttack          :   'Water Singing',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Plant', 'Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    idAttack            :   22,
    nameAttack          :   'Confusion',
    acquiValueAttack    :   12,
    forTypePokemon      :   ['Normal', 'Fight', 'Psychic'],
    IniDamage           :   12,
    amountMagic         :    5      
},
{
    idAttack            :   23,
    nameAttack          :   'Spin Water',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Fight', 'Water'],
    IniDamage           :   15,
    amountMagic         :   7      
},
{
    idAttack            :   24,
    nameAttack          :   'Mud Shot',
    acquiValueAttack    :   19,
    forTypePokemon      :   ['Earth', 'Ice', 'Normal', 'Rock', 'Water'],
    IniDamage           :   19,
    amountMagic         :    9      
},
{
    idAttack            :   25,
    nameAttack          :   'Transformation',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Bug', 'Plant', 'Psychic'],
    IniDamage           :   18,
    amountMagic         :   10      
},
{
    idAttack            :   26,
    nameAttack          :   'Material Damage',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Earth', 'Fight','Plant','Water'],
    IniDamage           :   15,
    amountMagic         :    7      
},
{
    idAttack            :   27,
    nameAttack          :   'Volt Change',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Electric'],
    IniDamage           :   18,
    amountMagic         :    7      
},
{
    idAttack            :   28,
    nameAttack          :   'Water Gun',
    acquiValueAttack    :   16,
    forTypePokemon      :   ['Ice', 'Water'],
    IniDamage           :   16,
    amountMagic         :    8      
},
{
    idAttack            :   29,
    nameAttack          :   'Water Singing',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    idAttack            :   30,
    nameAttack          :   'Snow Power',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Ice'],
    IniDamage           :   20,
    amountMagic         :   13      
},
{
    idAttack            :   31,
    nameAttack          :   'Deadly Rain',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Earth', 'Ice', 'Water'],
    IniDamage           :   18,
    amountMagic         :    9      
},
{
    idAttack            :   32,
    nameAttack          :   'Hidden Power Water',
    acquiValueAttack    :   26,
    forTypePokemon      :   ['Water'],
    IniDamage           :   26,
    amountMagic         :   14      
},
{
    idAttack            :   33,
    nameAttack          :   'Twister',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Bug', 'Normal', 'Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    idAttack            :   34,
    nameAttack          :   'Knockdown',
    acquiValueAttack    :   16,
    forTypePokemon      :   ['Fight', 'Normal', 'Rock'],
    IniDamage           :   16,
    amountMagic         :   6      
},
{
    idAttack            :   35,
    nameAttack          :   'Impress',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Normal', 'Water', 'Fight'],
    IniDamage           :   15,
    amountMagic         :   7      
},
{
    idAttack            :   36,
    nameAttack          :   'Peck Poison',
    acquiValueAttack    :   22,
    forTypePokemon      :   ['Bug', 'Poison'],
    IniDamage           :   22,
    amountMagic         :   11      
},
{
    idAttack            :   37,
    nameAttack          :   'Rock Strike',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Earth', 'Rock'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    idAttack            :   38,
    nameAttack          :   'Frost Mist',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Ice'],
    IniDamage           :   20,
    amountMagic         :   13      
},
{
    idAttack            :   39,
    nameAttack          :   'Destroyer',
    acquiValueAttack    :   12,
    forTypePokemon      :   ['Fight', 'Rock'],
    IniDamage           :   12,
    amountMagic         :    5     
},
{
    idAttack            :   40,
    nameAttack          :   'Calcination',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Electric',  'Fire'],
    IniDamage           :   20,
    amountMagic         :   11      
},
{
    idAttack            :   41,
    nameAttack          :   'Fissure',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Bug', 'Electric', 'Fight', 'Fire', 'Flying', 'Normal','Rock', 'Water'],
    IniDamage           :   18,
    amountMagic         :    9      
},
{
    idAttack            :   42,
    nameAttack          :   'Lifesuckers',
    acquiValueAttack    :   26,
    forTypePokemon      :   ['Bug', 'Plant', 'Poison', 'Water'],
    IniDamage           :   26,
    amountMagic         :   14      
},
{
    idAttack            :   43,
    nameAttack          :   'Set White',
    acquiValueAttack    :   12,
    forTypePokemon      :   ['Bug', 'Earth', 'Normal', 'Ice', 'Water'],
    IniDamage           :   12,
    amountMagic         :    5      
},
{
    idAttack            :   44,
    nameAttack          :   'Misfortune',
    acquiValueAttack    :   11,
    forTypePokemon      :   ['Bug', 'Earth', 'Fight', 'Fire', 'Flying', 'Ice', 'Normal'],
    IniDamage           :   11,
    amountMagic         :    4      
},
{
    idAttack            :   45,
    nameAttack          :   'Embers ',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Bug', 'Normal', 'Plant', 'Poison', 'Psychic', 'Water'],
    IniDamage           :   15,
    amountMagic         :   7      
},
{
    idAttack            :   46,
    nameAttack          :   'Present',
    acquiValueAttack    :   10,
    forTypePokemon      :   ['Bug', 'Earth', 'Electric', 'Fight', 'Fire', 'Flying', 'Ice', 'Normal', 'Plant', 'Poison', 'Psychic', 'Rock', 'Water'],
    IniDamage           :   10,
    amountMagic         :    4      
},
{
    idAttack            :   47,
    nameAttack          :   'Fury Attack ',
    acquiValueAttack    :   15,
    forTypePokemon      :   ['Electric', 'Fight', 'Fire', 'Flying', 'Normal', 'Psychic', 'Water'],
    IniDamage           :   15,
    amountMagic         :    9      
},
{
    idAttack            :   48,
    nameAttack          :   'Harmful Puja',
    acquiValueAttack    :   20,
    forTypePokemon      :   ['Bug', 'Earth', 'Fight', 'Flying', 'Normal'],
    IniDamage           :   20,
    amountMagic         :   13      
},
{
    idAttack            :   49,
    nameAttack          :   'Waterfall',
    acquiValueAttack    :   18,
    forTypePokemon      :   ['Plant', 'Water'],
    IniDamage           :   18,
    amountMagic         :    8     
},
{
    idAttack            :   50,
    nameAttack          :   'Aerial Slash',
    acquiValueAttack    :   12,
    forTypePokemon      :   ['Fight', 'Flying'],
    IniDamage           :   12,
    amountMagic         :    4      
},
                               ];

const arrayAvaibleOfAttacks  = [];                                      //  -->> Collection of attacks objects available in a game

///////////////////////////////////////////////////////////////////////////
//                      GENERALL FUNCTIONS                               //
//  1.-  Randon Number between MIN-MAX:
function numberRandomMinMax (parNumberMin, parNumberMax) {
let numberRandomMinMax = 0;
if (typeof parNumberMin === 'number' && typeof parNumberMax === 'number') {
numberRandomMinMax = Math.floor(Math.random() * (parNumberMax - parNumberMin) + parNumberMin);
} else {
console.log('|| Error:  The arguments of the function "numberRandonMinMax" must be integers numbers!!');
numberRandomMinMax = null;
}
return numberRandomMinMax;
}

