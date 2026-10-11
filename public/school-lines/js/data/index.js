// Country registry. To add a country, create a data file next to this one and list it here.
import nl_ from './nl.js';
import en_ from './en.js';
import sc_ from './sc.js';
import de_ from './de.js';
import fr_ from './fr.js';
import be_ from './be.js';
import at_ from './at.js';
import ch_ from './ch.js';
import it_ from './it.js';
import es_ from './es.js';
import pt_ from './pt.js';
import ie_ from './ie.js';
import se_ from './se.js';
import no_ from './no.js';
import dk_ from './dk.js';
import fi_ from './fi.js';
import pl_ from './pl.js';
import ru_ from './ru.js';
import tr_ from './tr.js';
import us_ from './us.js';
import ca_ from './ca.js';
import mx_ from './mx.js';
import br_ from './br.js';
import ar_ from './ar.js';
import cl_ from './cl.js';
import au_ from './au.js';
import nz_ from './nz.js';
import za_ from './za.js';
import ng_ from './ng.js';
import ke_ from './ke.js';
import eg_ from './eg.js';
import in_ from './in.js';
import jp_ from './jp.js';
import kr_ from './kr.js';
import cn_ from './cn.js';
import sg_ from './sg.js';
import id_ from './id.js';
import sa_ from './sa.js';

export const countries = [nl_, en_, sc_, de_, fr_, be_, at_, ch_, it_, es_, pt_, ie_, se_, no_, dk_, fi_, pl_, ru_, tr_, us_, ca_, mx_, br_, ar_, cl_, au_, nz_, za_, ng_, ke_, eg_, in_, id_, sa_, jp_, kr_, cn_, sg_];
export const byId = Object.fromEntries(countries.map((c) => [c.id, c]));

export const ISCED = {
  0: 'Early childhood education',
  1: 'Primary education',
  2: 'Lower secondary education',
  3: 'Upper secondary education',
  4: 'Post-secondary non-tertiary',
  5: 'Short-cycle tertiary',
  6: 'Bachelor’s or equivalent',
  7: 'Master’s or equivalent',
  8: 'Doctoral or equivalent',
};
